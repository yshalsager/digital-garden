---  
created: 2022-05-22 14:38  
updated: 2022-06-20 18:25  
title: Lesson 03 - App Navigation  
share: true  
website: en/notes/programming  
---  
## Lesson 03: App Navigation  
  
> Building multiple screens on Android has never been easier with the Navigation library. You'll get to build a fun [trivia app](https://github.com/udacity/andfun-kotlin-android-trivia) using multiple fragments and conditional navigation.  
  
### Navigation Terms  
  
- **Action Bar**: Appears at the top of the application screen. Contains application branding and navigation features such as the overflow menu and the application drawer button.  
- **Navigation Drawer**: A menu with a header that slides out from the side of the app.  
- **Navigation Graph**: All of the destinations -- the screens that can be navigated to from a single activity are contained in this.  
- **Overflow Menu**: A drop down list of items within the Action Bar that can contain navigation destinations.  
- **Up Button**: Appears in the action bar and takes us back through previous screens the user has navigated to within the app.  
- **The Activity layout**: UI Fragments contain a layout and occupy a place within.  
- **context**: Use this property from within a Fragment to get access to string and image resources.  
  
***  
  
### Fragments  
  
- Android introduced fragments in android 3.0 (API level 11) primarily to support more dynamic and flexible UI designs on large screens such as tablets.  
  
- The activity operates as a frame that contains the UI fragments and can provide UI elements that surround the fragment.  
  
- UI fragments generally operate like a view within the activity's layout but like an activity you must create a subclass of fragment to use it this gives you a layout along with the  convenient place to put UI logic the foundation of a reusable UI component.  
  
- With fragments you can pretty much treat activities as the operating system's entry point to the app since most of your UI ends up being implemented in the fragments but the OS can only open activities.  
  
- Within an activity you tell Android which layout to use by calling `setContentView()` in `onCreate`. The activity then inflates the layout and places it correctly within the activity's layout hierarchy.  
  
- With fragments you manually inflate and return the inflated layout within the `onCreateView()` method which is independent of `onCreate`.  
  
- Another difference since activities inherit from the `context` class but fragments do not. You'll need to use the `context` property within a  fragment to have access to app data typically associated with the context such as string and image resources.  
  
***  
  
### Navigation between fragments and activities  
  
- You can navigate between different activities and between fragments in an activity.  
  
- As you navigate through activities in Android the previous activities from within the app as well as from previous apps are arranged in a stack that we call the back stack.  
  
- This back stack is ordered based upon the order in which each activity is opened so an application that has a title screen as the first screen followed by a trivia game activity would have the trivia game activity at the top of the stack. Hitting the system back key would pop the trivia game activity off the stack and return to the title screen activity and hitting it again would exit the app finishing the activity and return us to the previous app probably the launcher.  
  
- Fragments can have a similar back stack, the entire stack is contained within the activity all of this is controlled by a class called the **fragment manager**.  
  
- When a fragment is instantiated by the fragment manager the fragment transaction can optionally be added to the fragment back stack if our example trivia app was written using fragments and we were in the game screen the fragment back stack would contain a transaction to return us to the title screen fragment. Hitting the back key would execute this transaction effectively popping the game screen fragment off of the stack and replacing it with the title screen fragment. Hitting it again would pass the back operation through to the activity back stack finishing the activity and exiting the app.  
  
***  
  
### Choosing navigation pattern  
  
Ultimately you can design your navigation with either an activity containing a series of fragments, a series of activities, or a combination of both techniques.  
For this class we're focusing on the single activity multiple fragment model which allows you to visualize your entire apps navigation within a single graph.  
  
***  
  
### Creating And Adding A Fragment  
  
1. Select File->New->Fragment->Fragment (Blank). __Uncheck__ `include fragment factory methods`, and `include interface callbacks`.  
  
2. As we used `DataBindingUtil.setContentView` in our Activity to get the binding class from a layout, in a fragment we need to call `DataBindingUtil.inflate` in `onCreateView` with the provided layout inflater, the layout resource ID, the provided viewgroup it will be hosted by, and false to not attach it to the viewgroup. Return `binding.root`.  
     
```kotlin  
//Inflating and Returning the View with DataBindingUtil  
override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,  
                        savedInstanceState: Bundle?): View? {  
  val binding = DataBindingUtil.inflate<FragmentTitleBinding>(inflater, R.layout.fragment_title, container, false)  
  return binding.root  
}  
```  
  
3. Add the fragment to the activity layout.  
     
```xml  
<fragment  
   android:id="@+id/titleFragment"  
   android:name="com.example.android.navigation.TitleFragment"  
   android:layout_width="match_parent"  
   android:layout_height="match_parent" />  
```  
  
***  
  
### Principles of Navigation  
  
The navigation component simplifies many navigation tasks more importantly it does so in a consistent way helping developers follow android's principles of navigation.  
  
- The first principle is that apps have a **fixed starting destination** which is the screen the user sees when they launch your app from the launcher. Apps that require login can have one of exceptions to this rule. This destination should also be the last screen the user sees when they return to the launcher after pressing the back button. **(There's always a starting place)**  
  
- The second principle of navigation is the navigation state of your app should be represented with a last in first, out structure. It's that back stack we talked about before. This navigation stack has the start destination at the bottom of the stack and the current destination at the top of the stack. Operations that change the navigation stack should always operate on the top of the navigation stack either by pushing a new destination on to the top of the stack or popping the top most destination off the stack. **(You can always go back)**  
  
- The third principle of navigation involves the way the user gets back to a previous destination. The UP button in the action bar and the system back button both work the same way when navigating within your apps task. The back button will also navigate out of your app and to other apps typically the launcher. correspondingly if the users at the start destination the UP button should not be shown. **(Up goes back, mostly)**  
  
It's important to have principles such as these implemented across a wide range of Android apps to provide a consistent and predictable experience for users.  
  
***  
  
### Starting Navigation  
  
1. Adding the [Navigation Components](https://developer.android.com/jetpack/androidx/releases/navigation) to the Project:  
     
   In `app/build.gradle` file, add the dependencies for navigation fragment ktx and [navigation UI](https://developer.android.com/topic/libraries/architecture/navigation/navigation-ui) ktx. You can see which version is the latest on [this page on developer.android.com](https://developer.android.com/topic/libraries/architecture/adding-components)  
     
```groovy  
dependencies {  
   ...  
   // Navigation  
   implementation "androidx.navigation:navigation-fragment-ktx:$version_navigation"  
   implementation "androidx.navigation:navigation-ui-ktx:$version_navigation"  
}  
```  
  
2. Adding the Navigation Graph to the Project:  
     
   In the Project window, right-click on the res directory and select New > Android resource file. The New Resource dialog appears.  
     
   Select Navigation as the resource type, and give it the file name of `navigation`. Make sure it has no qualifiers. Select the `navigation.xml` file in the new navigation directory under `res`, and make sure the design tab is selected.  
  
3. Replace the Title Fragment with the Navigation Host Fragment in the Activity Layout:  
     
```xml  
<fragment  
    android:id="@+id/myNavHostFragment"  
    android:name="androidx.navigation.fragment.NavHostFragment"  
    android:layout_width="match_parent"  
    android:layout_height="match_parent" />  
```  
  
4. Add `app:navGraph` pointing to the `@navigation/navigation` resource.  
     
```xml  
app:navGraph="@navigation/navigation"  
```  
  
5. Set `defaultNavHost` to ture.  
     
```xml  
app:defaultNavHost="true"  
```  
  
6. Adding Fragments to the Navigation Graph:  
     
   Within the navigation editor, click the add button. A list of fragments and activities will drop down. Add `fragment_title` first, as it is the start destination. (you’ll see that it will automatically be set as the Start Destination for the graph.) Next, add the `fragment_game`.  
     
```xml  
<navigation xmlns:android="http://schemas.android.com/apk/res/android"  
   xmlns:app="http://schemas.android.com/apk/res-auto"  
   xmlns:tools="http://schemas.android.com/tools"  
   android:id="@+id/nav_root"  
   app:startDestination="@+id/titleFragment">  
   <fragment  
       android:id="@+id/titleFragment"  
       android:name="com.example.android.navigation.TitleFragment"  
       android:label="@string/android_trivia"  
       tools:layout="@layout/fragment_title">  
       <action  
           android:id="@+id/action_titleFragment_to_gameFragment"  
           app:destination="@id/gameFragment" />  
   </fragment>  
   <fragment  
       android:id="@+id/gameFragment"  
       android:name="com.example.android.navigation.GameFragment"  
       android:label="@string/android_trivia"  
       tools:layout="@layout/fragment_game">  
   </fragment>  
</navigation>  
```  
_Note:_ `android:label` attribute is used for fragment title in action bar, while `tools:layout` is used for showing the fragment preview in navigation designer.  
  
7. Connecting Fragments with an Action:  
     
   Begin by hovering over the `titleFragment`. You’ll see a circular connection point on the right side of the fragment view. Click on the connection point and drag it to `gameFragment` to add an Action that connects the two fragments.  
  
8. Navigating when the Play Button is Hit:  
     
   Return to `onCreateView` in the `TitleFragment` Kotlin code. The binding class has been exposed, so you just call `binding.playButton.setOnClickListener` with a new anonymous function, otherwise known as a lambda. Inside our lambda, use `view.findNavcontroller` to get the navigation controller for our Navigation Host Fragment. Then, use the `navController` to navigate using the `titleFragment` to `gameFragment` action, by calling `navigate(R.id.action_titleFragment_to_gameFragment)`.  
     
```kotlin  
binding.playButton.setOnClickListener {view: View ->  
   Navigation.findNavController(view).navigate(R.id.action_titleFragment_to_gameFragment)  
}  
```  
     
   Or  
     
```kotlin  
//The complete onClickListener with Navigation  
binding.playButton.setOnClickListener { view: View ->  
       view.findNavController().navigate(R.id.action_titleFragment_to_gameFragment)  
}  
```  
     
   Or, use `Navigation` to create the `onClick` listener  
     
```kotlin  
binding.playButton.setOnClickListener(  
       Navigation.createNavigateOnClickListener(R.id.action_titleFragment_to_gameFragment))  
```  
  
***  
  
### Back Stack Manipulation  
  
- **PopTo Inclusive**: Pops off everything on the back stack, including the referenced fragment transaction.  
- **PopTo Not-Inclusive**: Pops off everything on the back stack until it finds the referenced fragment transaction.  
  
From the navigation editor, select the action for navigating from the `GameFragment` to the `GameOverFragment`. Select `PopTo` `GameFragment` in the attributes pane with the `inclusive` flag to tell the Navigation component to pop fragments off of the fragment back stack until it finds the `GameFragment`, and then pop off the `gameFragment` transaction.  
  
***  
  
### Adding Support for the Up Button  
  
To add support for the up button, we first need to make sure our Activity has an `ActionBar`.  
  
In `MainActivity` we’ll use the alternate method of finding the controller from the ID of our NavHostFragment using the KTX extension function.  
  
```kotlin  
val navController = this.findNavController(R.id.myNavHostFragment)  
```  
  
Then link the `NavController` to our `ActionBar`.  
  
```kotlin  
NavigationUI.setupActionBarWithNavController(this, navController)  
```  
  
Finally, we need to have the Activity handle the `navigateUp` action from our Activity. To do this we override `onSupportNavigateUp`, find the nav controller, and then we call `navigateUp().`   
  
```kotlin  
override fun onSupportNavigateUp(): Boolean {  
   val navController = this.findNavController(R.id.myNavHostFragment)  
   return navController.navigateUp()  
}  
```  
  
***  
  
### Menus  
  
#### Menu Attributes  
  
- **title**: String displayed in the menu.  
- **onCreateOptionsMenu**: Where you inflate your menu.  
- **onOptionsItemSelected**: Called when a menu item is selected.  
- **setHasOptionsMenu**: Tells Android that the Fragment has a menu.  
  
#### Adding a Menu  
  
1. Create new menu resource.  
     
   Right click on the `res` folder within the Android project and select New Resource File. We’ll call this one `overflow_menu`, with resource type of `Menu`. Click on the `overflow_menu` within the menu directory, to view our new (empty) menu.  
  
2. Create “`About`” menu item with ID of `aboutFragment` destination.  
     
   Drag a menu item from the palette into the component tree. Move to the attributes pane. Set the new item's id to `aboutFragment`, its destination. That's the id you used when adding the About fragment to the navigation graph. For title, we can use `@string/about`. The rest of the attributes should be left as their defaults.  
  
3. Call `setHasOptionsMenu()` in `onCreateView` of `TitleFragment`:  
     
```kotlin  
override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,  
                        savedInstanceState: Bundle?): View? {  
    ...  
    setHasOptionsMenu(true)  
    return binding.root  
}  
```  
  
4. Override `onCreateOptionsMenu` and inflate menu resource:  
     
```kotlin  
override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {  
    super.onCreateOptionsMenu(menu, inflater)  
    inflater.inflate(R.menu.overflow_menu, menu)  
}  
```  
  
5. Override `onOptionsItemSelected` and call `NavigationUI.onNavDestinationSelected`:  
     
```kotlin  
override fun onOptionsItemSelected(item: MenuItem): Boolean {  
    return NavigationUI.onNavDestinationSelected(  
        item, view!!.findNavController()  
    )  
            || super.onOptionsItemSelected(item)  
}  
```  
_Note:_ `|| super.onOptionsItemSelected(item)` statement allows the app to handle regular menu actions that doesn't involve navigation.  
  
***  
  
### Safe Arguments  
  
Safeargs is a Gradle plugin which generates simple object and builder classes for type-safe access to arguments specified for destinations and actions. It’s built on top of the Bundle approach and requires little more code for type safety.  
  
#### What are advantages we get from using safe arguments?  
  
- We get type safety, as navigation generates the action and the argument class from the navigation graph.  
- We get argument enforcement, as non-default arguments are required parameters in the action.  
  
#### Adding Safe Arguments  
  
1. In project `build.gradle` add the classpath for the navigation-safe-args-gradle-plugin.  
     
```kotlin  
classpath "androidx.navigation:navigation-safe-args-gradle-plugin:$version_navigation"  
```  
  
2. In `app/build.gradle` at the top and after all of the other plugins, add the apply plugin statement with the androidx navigation safeargs plugin.  
     
```kotlin  
// Adding the apply plugin statement for safeargs  
apply plugin: 'kotlin-kapt'  
apply plugin: 'androidx.navigation.safeargs'  
```  
  
3. Switch the Fragment to use generated `NavDirections` when navigating to the other fragments.  
     
```kotlin  
// Using directions to navigate to the GameWonFragment  
// view.findNavController().navigate(R.id.action_gameFragment_to_gameWonFragment)  
   view.findNavController().navigate(GameFragmentDirections.actionGameFragmentToGameWonFragment())  
```  
  
4. Add the Arguments using the navigation editor.  
     
   Go to the navigation editor and select the `GameWon` fragment. Click the little triangle next to arguments to expand the argument section. Add a `numQuestions` and a `numCorrect` argument, both with integer type.  
```xml  
<fragment  
    android:id="@+id/gameFragment"  
    android:name="me.yshalsager.tictactoe.GameFragment"  
    android:label="@string/app_name"  
    tools:layout="@layout/fragment_game">  
    <action  
        android:id="@+id/action_gameFragment_to_winFragment"  
        app:destination="@id/winFragment" />  
    <argument  
        android:name="winner"  
        app:argType="integer" />  
</fragment>  
```  
  
_Note:_ To add `ArrayList` to arguments you can use `app:argType="string[]"` as fragment argument type.  
  
5. Add the parameters from the first Fragment to second Fragment action.  
     
```kotlin  
// Adding the parameters to the Action  
view.findNavController().navigate(GameFragmentDirections.actionGameFragmentToGameWonFragment(numQuestions, questionIndex))  
```  
  
6. Fetch the args and expand into a class in `onCreate` within the second Fragment.  
     
```kotlin  
val args = GameWonFragmentArgs.fromBundle(arguments!!)  
```  
  
7. Display the arguments using a `Toast`.  
     
```kotlin  
Toast.makeText(context, "NumCorrect: ${args.numCorrect}, NumQuestions: ${args.numQuestions}", Toast.LENGTH_LONG).show()  
```  
  
***  
  
### Intents and Sharing  
  
#### Intent  
  
An Intent is an "intention" to perform an action; a messaging object you can use to request an action from another [app component](https://developer.android.com/guide/components/fundamentals.html#Components), it has two types:  
  
- **Explicit Intents**: Launches an Activity based upon its class name. It's used to call a specific component. When you know which component you want to launch and you do not want to give the user free control over which component to use.  
  
- **Implicit Intents**: Launches an Activity based upon parameters, such as <u>action</u> (The type of thing that the app wants to have done on its behalf), data, and data type (MIME). It's used when you have an idea of what you want to do, but you do not know which component should be launched. Or if you want to give the user an option to choose between a list of components to use.  
  
#### Adding Sharing with an Intent  
  
1. Create new menu resource, which has icon, title and [showAsAction](https://developer.android.com/guide/topics/resources/menu-resource) attribute.   
     
```xml  
<menu xmlns:app="http://schemas.android.com/apk/res-auto"  
   xmlns:android="http://schemas.android.com/apk/res/android">  
   <item  
       android:id="@+id/share"  
       android:enabled="true"  
       android:icon="@drawable/share"  
       android:title="@string/share"  
       android:visible="true"  
       app:showAsAction="ifRoom" />  
</menu>  
```  
  
2. Add `setHasOptionsMenu(true)` to `onCreateView() `in our the Fragment.  
     
```kotlin  
// Declaring that our Fragment has a Menu  
setHasOptionsMenu(true)  
```  
  
3. Create a `getShareIntent` method. Get the args and build the `shareIntent` inside.  
     
```kotlin  
private fun getShareIntent(): Intent {  
   val args = GameWonFragmentArgs.fromBundle(arguments!!)  
   val shareIntent = Intent(Intent.ACTION_SEND)  
   shareIntent.setType("text/plain").putExtra(  
       Intent.EXTRA_TEXT,  
       getString(R.string.share_success_text, args.numCorrect, args.numQuestions)  
   )  
   return shareIntent  
}  
```  
     
   Or even better, using `IntentBuilder`  
     
```kotlin  
private fun getShareIntent(): Intent {  
   val args = GameWonFragmentArgs.fromBundle(arguments!!)  
   return ShareCompat.IntentBuilder.from(requireActivity())  
       .setText(getString(R.string.share_success_text, args.numCorrect, args.numQuestions)).setType("text/plain")  
       .intent  
}  
```  
  
4. Create a `shareSuccess` method that starts the activity from the share Intent.  
     
```kotlin  
// Starting an Activity with our new Intent  
private fun shareSuccess() {  
    startActivity(getShareIntent())  
}  
```  
  
5. Override `onCreateOptionsMenu` and inflate the menu xml.  
     
```kotlin  
override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {  
    super.onCreateOptionsMenu(menu, inflater)  
    inflater.inflate(R.menu.winner_menu, menu)  
}  
```  
  
6. Override `onOptionsIemSelected` to link the menu to the `shareSuccess` action.  
     
```kotlin  
// Sharing from the Menu  
override fun onOptionsItemSelected(item: MenuItem): Boolean {  
    when (item.itemId) {  
        R.id.share -> shareSuccess()  
    }  
    return super.onOptionsItemSelected(item)  
}  
```  
  
7. Hide the sharing menu item if the sharing intent doesn’t resolve to an Activity.  
     
   Get the shareIntent using `getShareIntent()` and call `resolveActivity` using the `packageManger` to make sure our shareIntent resolves to an activity. If the result equals null, which means that it doesn’t resolve, we find our sharing menu item from the inflated menu and set its visibility to false.  
     
```kotlin  
// Showing the Share Menu Item Dynamically  
override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {  
    super.onCreateOptionsMenu(menu, inflater)  
    inflater.inflate(R.menu.winner_menu, menu)  
    // check if the activity resolves  
    if (null == getShareIntent().resolveActivity(activity!!.packageManager)) {  
      // hide the menu item if it doesn't resolve  
      menu.findItem(R.id.share)?.isVisible = false  
    }  
}  
```  
     
   <u>**Alternative:**</u> You can just catch the exception and show a toast.  
     
```kotlin  
try {  
    startActivity(shareIntent)  
    } catch (ex: ActivityNotFoundException) {  
    Toast.makeText(this, getString(R.string.sharing_not_available),  
           Toast.LENGTH_LONG).show()  
}  
```  
  
***  
  
### Adding the Navigation Drawer  
  
1. Add Material Design to `app/build.gradle`.  
     
```groovy  
implementation "com.google.android.material:material:$version_material"  
```  
  
2. Add the `RulesFragment` to the navigation graph.  
     
   Go to the navigation editor and click the "add" button. Add the rules fragment.  
  
3. Create the [navDrawer](https://developer.android.com/guide/navigation/navigation-ui#add_a_navigation_drawer) menu with the `rulesFragment` and `aboutFragment` menu items.  
     
   Create the `navdrawer_menu`. Add two menu items by dragging menu items into the component tree. The first item should have the id of the `RulesFragment`, the rules string and drawable. The second item should have the ID of the `AboutFragment`, the about string and the android drawable.  
  
4. Add the `DrawerLayout` into the `activity_main` layout containing the `LinearLayout` and `navHostFragment`.  
     
```xml  
<layout xmlns:android="http://schemas.android.com/apk/res/android"  
xmlns:app="http://schemas.android.com/apk/res-auto">  
  
<androidx.drawerlayout.widget.DrawerLayout  
  android:id="@+id/drawerLayout"  
  android:layout_width="match_parent"  
  android:layout_height="match_parent"  
>  
```  
  
5. Add the `NavigationView` at the bottom of the the `DrawerLayout`.  
     
```xml  
<com.google.android.material.navigation.NavigationView  
  android:id="@+id/navView"  
  android:layout_width="wrap_content"  
  android:layout_height="match_parent"  
  android:layout_gravity="start"  
  app:menu="@menu/navdrawer_menu" />  
```  
  
6. In `MainActivity` and add private lateinit vars for `drawerLayout` and `appBarConfiguration`.  
     
```kotlin  
private lateinit var drawerLayout: DrawerLayout  
private lateinit var appBarConfiguration: AppBarConfiguration  
```  
  
7. Initialize the `drawerLayout` from the binding variable.  
     
```kotlin  
val binding = DataBindingUtil.setContentView<ActivityMainBinding>(this, R.layout.activity_main)  
// Initialize drawerLayout var from binding  
drawerLayout = binding.drawerLayout  
```  
  
8. Add the `DrawerLayout` as the third parameter to `setupActionBarWithNavController`.  
     
```kotlin  
// Add the DrawerLayout as the second parameter to setupActionBarWithNavController  
// NavigationUI.setupActionBarWithNavController(this, navController)  
NavigationUI.setupActionBarWithNavController(this, navController, drawerLayout)  
```  
  
9. Create an `appBarConfiguration` with the `navController.graph` and `drawerLayout`.  
     
```kotlin  
appBarConfiguration = AppBarConfiguration(navController.graph, drawerLayout)  
```  
  
10. Hook up the navigation UI up to the navigation view.  
      
```kotlin  
NavigationUI.setupWithNavController(binding.navView, navController)  
```  
  
11. In `onSupportNavigateUp`, replace `navController.navigateUp` with `NavigationUI.navigateUp` with `appBarConfiguration` as parameter.  
      
```kotlin  
override fun onSupportNavigateUp(): Boolean {  
   val navController = this.findNavController(R.id.myNavHostFragment)  
   // Replace navController.navigateUp with NavigationUI.navigateUp with drawerLayout param  
   // return navController.navigateUp()  
   return NavigationUI.navigateUp(navController, appBarConfiguration)  
}  
```  
  
12. To make the navigation header looks better, in the `NavigationView` at the bottom of the `DrawerLayout` within the main activity layout file, add the nav header as the `headerLayout`.  
      
```xml  
app:headerLayout="@layout/nav_header"  
```  
  
#### How to Navigate  
  
- **App Drawer navigation**: Defaults to popping everything off the backstack except for the start destination.  
- **DrawerLayout**: Provides the foundation for the sliding behavior of the navigation drawer.  
- **Menu navigation**: Adds to the backstack from the current position.  
- **NavigationView**: Material Design container that provides the look, feel, and functionality of the Navigation Drawer.  
  
***  
  
### Using Navigation Listeners  
  
- Navigation listeners are interfaces that contains a single method that gets called every time we navigate.  
- The allow us to react and do something during navigation, or in our case block the draw from coming out after navigating away from the start destination.  
- Using navigation listener within `onCreate` to get called whenever the destination changes.  
  
To prevent the drawer from being swiped anywhere other than the `startDestination`, call `addOnDestinationChangedListener` with a lambda that sets the `DrawerLockMode` depending on what destination we’re navigating to. When the id of our `NavDestination` matches the `startDestination` of our graph, we’ll unlock the `drawerLayout`; otherwise, we’ll lock and close the `drawerLayout`.  
  
```kotlin  
// prevent nav gesture if not on start destination  
navController.addOnDestinationChangedListener { nc: NavController, nd: NavDestination, args: Bundle? ->  
   if (nd.id == nc.graph.startDestination) {  
       drawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_UNLOCKED)  
   } else {  
       drawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_LOCKED_CLOSED)  
   }  
}  
```  
  
***  
  
### Animation with Navigation  
  
- One more cool thing that we can do with navigation is to apply animated transitions. A restrained and artful use of these transitions can not only make application stand out from the crowbut can help the user understand the  
  flow of the application.  
  
- These transitions are controlled by XML animation resources. There are several different kinds of animations in Android but for now we're going to focus on view animations which describe a transformation of a single view or view  group such as the view group contained by our fragment.  
  
- We're going to cover alpha animations and translation animations in this lesson, but the framework also includes rotation and scale animations. The framework includes predefined animation resources and the navigation component also includes some default animations, but it's fun to create our own.  
  
#### Alpha Animations  
  
Alpha describes how transparent something is. At 0% alpha the view would be invisible, while at 100% alpha the view would be opaque.  
  
#### Translate Animations  
  
- Translate animations can use twice the information as alpha animations because we control the change in X and the change in Y.  
- Changes in X and y are in percent offset.  
- Where 100% X is off-screen right and negative 100% X is off-screen left, while 0% is not offset.  
- Changing the Y from negative 100% to 0% will slide the fragment in from off-screen top, while changing the Y from 100% to 0% will slide the fragment in from off-screen bottom.  
  
#### Animation Attributes  
  
- **Enter Transition**: Played for the destination to be navigated to when it is entered.  
- **Exit Transition**: Played for the destination to be navigated to when another destination replaces the current one.  
- **Pop Enter Transition**: Played when the destination is returned to view from the back stack.  
- **Pop Exit Transition**: Played when the current destination is popped off the back stack.  
  
#### Creating Animations  
  
- To create fade in animation resource right click on the anim folder with New->Animation resource file and name it `fade_in`.  
- When we open the newly created fade_in.xml file, it will contain an empty animation set:  
    
```xml  
<set xmlns:android="http://schemas.android.com/apk/res/android">  
</set>  
```  
  
- We need to add an alpha animation in there, going from 0 to 1 (fading in) and taking the medium animation time. We do that by setting `fromAlpha` to 0, `toAlpha` to 1, and the duration to `@android:integer/config_mediumAnimTime`.  
    
```xml  
<!-- Fade In Animation -->  
<set xmlns:android="http://schemas.android.com/apk/res/android">  
 <alpha  
     android:duration="@android:integer/config_mediumAnimTime"  
     android:fromAlpha="0.0"  
     android:toAlpha="1.0" />  
</set>  
```  
  
- To create slide in left animation resource we need to do the same thing for the `slide_in_left` animation. We start by creating the file, and get an empty animation set. We then need to add a translate animation in there, going from -100% off screen in the X axis to 0% offscreen in the X axis. Let’s do this one with a short duration. For the Y axis, we’ll be at 0 (onscreen) at the start and end of the animation.  
    
```xml  
<set xmlns:android="http://schemas.android.com/apk/res/android">  
 <translate  
     android:fromXDelta="-100%"  
     android:toXDelta="0%"  
     android:fromYDelta="0%"  
     android:toYDelta="0%"  
     android:duration="@android:integer/config_shortAnimTime" />  
</set>  
```  
  
#### Adding transitions to actions  
  
Our first action connects the `TitleFragment` to the `GameFragment`. We’ll have it slide in from the left and out to the right when entering and exiting, and have it slide in from the right and out to the left when pop entering and pop exiting. Edit them from Design editor.  
  
Repeat the same set of animations for the game fragment to the game won fragment, from the `gameWonFragment` to the `gameFragment`, and from the `gameOverFragment` to the `gameFragment`. For the transition to the `gameOverFragment`, we’ll fade in and out instead.  
  
***  
  
### Summary  
  
#### Create a fragment  
  
* A _Fragment_ is a modular section of an activity.  
* A Fragment has its own lifecycle and receives its own input events.  
* Use the `<fragment>` tag to define the layout for the Fragment in the XML layout file.  
* Inflate the layout for a Fragment in `onCreateView()`.  
* You can add or remove a Fragment while the activity is running.  
  
#### Define navigation paths  
  
**Navigation components**  
  
To use the Android _navigation library_, you need to do some setup:  
  
* Add dependencies for `navigation-fragment-ktx` and `navigation-ui-ktx` in the module-level `build.gradle` file.  
* Add an `ext` variable for the `navigationVersion` in the project-level `build.gradle` file.  
  
_Navigation destinations_ are fragments, activities, or other app components that the user navigates to. A _navigation graph_ defines the possible paths from one navigation destination to the next.  
  
* To create a navigation graph, create a new Android resource file of type **Navigation**. This file defines the navigation flow through the app. The file is in the `res/navigation` folder, and it's typically called `navigation.xml`.  
* To see the navigation graph in the Navigation Editor, open the `navigation.xml` file and click the **Design** tab.  
* Use the Navigation Editor to add destinations such as fragments to the navigation graph.  
* To define the path from one destination to another, use the Navigation Graph to create an action that connects the destinations. In the `navigation.xml` file, each of these connections is represented as an `action` that has an `ID`.  
  
A _navigation host Fragment_, usually named `NavHostFragment`, acts as a host for the fragments in the navigation graph:  
  
* As the user moves between destinations defined in the navigation graph, the `NavHostFragment` swaps the fragments in and out and manages the Fragment back stack.  
* In the `activity_main.xml` layout file, the `NavHostFragment` is represented by a `fragment` element with the name `android:name="androidx.navigation.fragment.NavHostFragment"`.  
  
To define which Fragment is displayed when the user taps a view (for example a button), set the `onClick` listener for the view:  
  
* In the `onClick` listener, call `findNavController().navigate()` on the view.  
* Specify the `ID` of the `action` that leads to the destination.  
  
_Conditional navigation_ navigates to one screen in one case, and to a different screen in another case. To create conditional navigation:  
  
1. Use the Navigation Editor to create a connection from the starting Fragment to each of the possible destination fragments.  
2. Give each connection a unique ID.  
3. In the click-listener method for the `View`, add code to detect the conditions. Then call `findNavController().navigate()` on the view, passing in the ID for the appropriate action.  
  
**The Back button**  
  
The system's _Back button_ is usually at the bottom of the device. By default, the Back button navigates the user back to the screen they viewed most recently. In some situations, you can control where the Back button takes the user:  
  
* In the Navigation Editor, you can use the **Attributes** pane to change an action's **popUpTo** setting. This setting removes destinations from the back stack, which has the effect of determining where the Back button takes the user.  
* The **popUpTo** setting appears as the `popUpTo` attribute in the `navigation.xml` file.  
  
![1f8e86b02d795270.png](https://developer.android.com/codelabs/kotlin-android-training-add-navigation/img/1f8e86b02d795270.png)  
  
* Selecting the **popUpToInclusive** checkbox sets the `popUpToInclusive` attribute to `true`. All destinations up to and _including_ this destination are removed from the back stack.  
* If an action's `popUpTo` attribute is set to the app's starting destination and `popUpToInclusive` is set to `true`, the Back button takes the user all the way out of the app.  
  
**The Up button**  
  
Screens in an Android app can have an on-screen _Up button_ that appears at the top left of the [_app bar_](https://developer.android.com/topic/libraries/architecture/navigation/navigation-ui#top_app_bar). (The app bar is sometimes called the _action bar._) The Up button navigates "upwards" within the app's screens, based on the hierarchical relationships between screens.  
  
The navigation controller's [`NavigationUI`](https://developer.android.com/topic/libraries/architecture/navigation/navigation-ui) library integrates with the app bar to allow the user to tap the Up button on the app bar to get back to the app's home screen from anywhere in the app.  
  
To link the navigation controller to the app bar:  
  
1. In `onCreate()`, call `setupActionBarWithNavController()` on the `NavigationUI` class, passing in the navigation controller:  
  
```kotlin  
val navController = this.findNavController(R.id.myNavHostFragment)  
NavigationUI.setupActionBarWithNavController(this,navController)  
```  
  
2.  Override the `onSupportNavigateUp()` method to call `navigateUp()` in the navigation controller:  
  
```kotlin  
override fun onSupportNavigateUp(): Boolean {  
        val navController = this.findNavController(R.id.myNavHostFragment)  
        return navController.navigateUp()  
    }  
}  
```  
  
**The options menu**  
  
The _options menu_ is a menu that the user accesses from the app bar by tapping the icon with the three vertical dots ![4cdd17fa43bfbe6.png](https://developer.android.com/codelabs/kotlin-android-training-add-navigation/img/4cdd17fa43bfbe6.png). To create an options menu with a menu item that displays a Fragment, make sure the Fragment has an ID. Then define the options menu and code the `onOptionsItemSelected()` handler for the menu items.  
  
1. Make sure the Fragment has an ID:  
  
* Add the destination Fragment to the navigation graph and note the ID of the Fragment. (You can change the ID if you like.)  
  
2. Define the options menu:  
  
* Create an Android resource file of type **Menu**, typically named `options_menu.xml`. The file is stored in the **Res > Menu** folder.  
* Open the `options_menu.xml` file in the design editor and drag a **Menu Item** widget from the **Palette** pane to the menu.  
* For convenience, make the ID of the menu item the same as the ID of the Fragment to display when the user clicks this menu item. This step is not required, but it makes it easier to code the `onClick` behavior for the menu item.  
  
3. Code the `onClick` handler for the menu item:  
  
* In the Fragment or Activity that displays the options menu, in `onCreateView()`, call `setHasOptionsMenu(true)` to enable the options menu.  
* Implement `onCreateOptionsMenu()` to inflate the options menu:  
  
```kotlin  
override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {  
        super.onCreateOptionsMenu(menu, inflater)  
        inflater.inflate(R.menu.options_menu, menu)  
}  
```  
  
* Override the `onOptionsItemSelected()` method to take the appropriate action when the menu item is clicked. The following code displays the Fragment that has the same ID as the menu item. (This code only works if the menu item and the Fragment have identical ID values.)  
  
```kotlin  
override fun onOptionsItemSelected(item: MenuItem): Boolean {  
     return NavigationUI.  
            onNavDestinationSelected(item,requireView().findNavController())  
            || super.onOptionsItemSelected(item)  
}  
```  
  
**The navigation drawer**  
  
The _navigation drawer_ is a panel that slides out from the edge of the screen. There are two ways for the user to open the navigation drawer:  
  
* Swipe from the starting edge (usually the left) on any screen.  
* Use the drawer button (three lines) ![7277f85db3a1ad13.png](https://developer.android.com/codelabs/kotlin-android-training-add-navigation/img/7277f85db3a1ad13.png) on the app bar at the top of the app.  
  
To add a navigation drawer to your app:  
  
1. Add dependencies to `build.gradle (app)`.  
2. Make sure each destination Fragment has an ID.  
3. Create the menu for the drawer.  
4. Add the drawer to the layout for the Fragment.  
5. Connect the drawer to the navigation controller.  
6. Set up the drawer button in the app bar.  
  
These steps are explained in more detail below.  
  
1. Add dependencies to `build.gradle`:  
  
* The navigation drawer is part of the Material Components for Android library. Add the Material library to the `build.gradle (app)` file:  
  
```groovy  
dependencies {  
    ...  
    implementation "com.google.android.material:material:$supportlibVersion"  
    ...  
}  
```  
  
2. Give each destination Fragment an ID:  
  
* If a Fragment is reachable from the navigation drawer, open it in the navigation graph to make sure that it has an ID.  
  
3. Create the menu for the drawer:  
  
* Create an Android resource file of type **Menu** (typically called `navdrawer_menu`) for a navigation drawer menu. This creates a new `navdrawer_menu.xml` file in the `Res > Menu` folder.  
* In the design editor, add **Menu Item** widgets to the **Menu**.  
  
4. Add the drawer to the layout for the Fragment:  
  
* In the layout that contains the navigation host Fragment (which is typically the main layout), use `<androidx.drawerlayout.widget.DrawerLayout>` as the root view.  
* Add a `<com.google.android.material.navigation.NavigationView>` view to the layout.  
  
5. Connect the drawer to the navigation controller:  
  
* Open the Activity that creates the navigation controller. (The main Activity is typically the one you want here.) In `onCreate()`, use `NavigationUI.setupWithNavController()`to connect the navigation drawer with the navigation controller:  
  
```kotlin  
val binding = DataBindingUtil.setContentView<ActivityMainBinding>(  
       this, R.layout.activity_main)  
NavigationUI.setupWithNavController(binding.navView, navController)  
```  
  
6. Set up the drawer button in the app bar:  
  
* In `onCreate()` in the Activity that creates the navigation controller (which is typically the main Activity), pass the drawer layout as the third parameter to `NavigationUI.setupActionBarWithNavController`:  
  
```kotlin  
val binding = DataBindingUtil.setContentView<ActivityMainBinding>(  
    this, R.layout.activity_main)  
  
NavigationUI.setupActionBarWithNavController(  
    this, navController, binding.drawerLayout)  
```  
  
* To make the Up button work with the drawer button, edit `onSupportNavigateUp()` to return `NavigationUI.navigateUp()`. Pass the navigation controller and the drawer layout to `navigateUp()`.  
  
```kotlin  
override fun onSupportNavigateUp(): Boolean {  
   val navController = this.findNavController(R.id.myNavHostFragment)  
   return NavigationUI.navigateUp(navController, drawerLayout)  
}  
```  
  
### Start an external Activity  
  
**Safe Args:**  
  
* To help catch errors caused by missing keys or mismatched types when you pass data from one Fragment to another, use a Gradle plugin called [_Safe Args_](https://developer.android.com/topic/libraries/architecture/navigation/navigation-pass-data#Safe-args).  
* For each Fragment in your app, the Safe Args plugin generates a corresponding `NavDirection` class. You add the `NavDirection` class to the Fragment code, then use the class to pass arguments between the Fragment and other fragments.  
* The `NavDirection` classes represent navigation from all the app's actions.  
  
**Implicit intents:**  
  
* An [_implicit intent_](https://developer.android.com/training/basics/intents/sending) declares an action that your app wants some other app (such as a camera app or email app) to perform on its behalf.  
* If several Android apps could handle an implicit intent, Android shows the user a chooser. For example, when the user taps the **share** icon in the AndroidTrivia app, the user can select which app they want to use to share their game results.  
* To build an intent, you declare an action to perform, for example [`ACTION_SEND`](https://developer.android.com/reference/android/content/Intent.html#ACTION_SEND).  
* Several [`Intent()`](https://developer.android.com/reference/android/content/Intent.html#public-constructors_1) constructors are available to help you build intents.  
  
**Sharing functionality:**  
  
* In the case of sharing your success with your friends, the `Intent` action would be `Intent.ACTION_SEND.`  
* To add an options menu to a Fragment, set the [`setHasOptionsMenu()`](https://developer.android.com/reference/android/support/v4/app/Fragment#sethasoptionsmenu) method to `true` in the Fragment code.  
* In the Fragment code, override the `onCreateOptionsMenu()` method to inflate the menu.  
* Override the `onOptionsItemSelected()` to use `startActivity()` to send the `Intent` to other apps that can handle it.  
  
When the user taps the menu item, the intent is fired, and the user sees a chooser for the `SEND` action.  
