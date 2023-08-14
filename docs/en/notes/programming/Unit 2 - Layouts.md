---  
created: 2022-05-22 14:35  
updated: 2022-06-20 18:25  
title: Unit 2 - Layouts  
share: true  
website: en/notes/programming  
---  
# [Unit 2: Layouts](https://developer.android.com/courses/android-basics-kotlin/unit-2)  
  
## [Get user input in an app](https://developer.android.com/courses/pathways/android-basics-kotlin-unit-2-pathway-1)  
  
### [Classes and inheritance in Kotlin](https://developer.android.com/codelabs/basic-android-kotlin-training-classes-and-inheritance)  
  
* Create a class hierarchy, that is a tree of classes where children inherit functionality from parent classes. Properties and functions are inherited by subclasses.  
    * **Class hierarchy**. An arrangement where classes are organized in a hierarchy of parents and children. Hierarchy diagrams are usually drawn with the parents shown above children.  
    * **Child or subclass**. Any class that is below another class in the hierarchy.  
    * **Parent or superclass or base class**. Any class with one or more child classes.  
    * **Root or top-level class**. The class at the top (or root) of the class hierarchy.  
    * **Inheritance**. When a child class includes (or inherits) all the properties and methods of its parent class. This allows you to share and reuse code, which makes programs easier to understand and maintain.  
* Create an `abstract` class where some functionality is left to be implemented by its subclasses.   
```kotlin  
abstract class Dwelling(private var residents: Int) {  
     
   abstract val buildingMaterial: String  
   abstract val capacity: Int  
      
   fun hasRoom(): Boolean {  
       return residents < capacity  
   }  
}  
```  
* An `abstract` class can therefore not be instantiated.  
* Create subclasses of an `abstract` class.  
* Use `override` keyword to override properties and functions in subclasses.  
```kotlin  
class SquareCabin(residents: Int) : Dwelling(residents) {  
    override val buildingMaterial = "Wood"  
    override val capacity = 6  
}  
```  
* Use the `super` keyword to reference functions and properties in the parent class.  
```kotlin  
override fun floorArea(): Double {  
    return super.floorArea() * floors  
}  
```  
* Make a class `open` so that it can be subclassed.  
```kotlin  
open class RoundHut(residents: Int) : Dwelling(residents) {  
   override val buildingMaterial = "Straw"  
   override val capacity = 4  
}  
```  
* Make a property` private`, so it can only be used inside the class.  
* Use the `with` construct to make multiple calls on the same object instance.  
```kotlin  
with(roundHut) {  
    println("\nRound Tower\n==========")  
    println("Material: ${buildingMaterial}")  
    println("Capacity: ${capacity}")  
    println("Has room? ${hasRoom()}")  
}  
```  
* Import functionality from the `kotlin.math` library  
```kotlin  
import kotlin.math.PI  
import kotlin.math.sqrt  
  
fun floorArea(): Double {  
    return PI * radius * radius  
}  
  
fun calculateMaxCarpetSize(): Double {  
    val diameter = 2 * radius  
    return sqrt(diameter * diameter / 2)  
}  
```  
  
<hr>  
  
### [Create XML layouts for Android](https://developer.android.com/codelabs/basic-android-kotlin-training-xml-layouts)  
  
* XML (Extensible Markup Language) is a way of organizing text, made of tags, elements, and attributes.  
* Use XML to define the layout of an Android app.  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<androidx.constraintlayout.widget.ConstraintLayout    
    xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:app="http://schemas.android.com/apk/res-auto"  
    xmlns:tools="http://schemas.android.com/tools"  
    android:layout_width="match_parent"  
    android:layout_height="match_parent"  
    tools:context=".MainActivity">  
  
    <TextView  
        android:layout_width="wrap_content"  
        android:layout_height="wrap_content"  
        android:text="Hello World!"  
        app:layout_constraintBottom_toBottomOf="parent"  
        app:layout_constraintLeft_toLeftOf="parent"  
        app:layout_constraintRight_toRightOf="parent"  
        app:layout_constraintTop_toTopOf="parent" />  
  
</androidx.constraintlayout.widget.ConstraintLayout>  
```  
* Use `EditText` to let the user input or edit text.  
```xml  
<EditText  
    android:id="@+id/plain_text_input"  
    android:layout_height="wrap_content"  
    android:layout_width="match_parent"  
    app:layout_constraintStart_toStartOf="parent"  
    app:layout_constraintTop_toTopOf="parent"  
    android:inputType="text"/>  
```  
* An `EditText` can have a hint to tell the user what is expected in that field.  
```xml  
    android:hint="Cost of Service"  
```  
* Specify the `android:inputType` attribute to limit what type of text the user can input into an `EditText` field.  
```xml  
    android:inputType="numberDecimal"  
```  
* Make a list of exclusive options with `RadioButtons`, grouped with a `RadioGroup`.  
```xml  
<RadioGroup  
    android:id="@+id/tip_options"  
    android:checkedButton="@id/option_twenty_percent"  
    android:layout_width="wrap_content"  
    android:layout_height="wrap_content"  
    app:layout_constraintTop_toBottomOf="@id/service_question"  
    app:layout_constraintStart_toStartOf="parent"  
    android:orientation="vertical">  
  
    <RadioButton  
        android:id="@+id/option_twenty_percent"  
        android:layout_width="wrap_content"  
        android:layout_height="wrap_content"  
        android:text="Amazing (20%)" />  
  
    <RadioButton  
        android:id="@+id/option_eighteen_percent"  
        android:layout_width="wrap_content"  
        android:layout_height="wrap_content"  
        android:text="Good (18%)" />  
  
</RadioGroup>  
```  
* A `RadioGroup` can be vertical or horizontal, and you can specify which `RadioButton` should be selected initially.  
```xml  
    android:orientation="vertical"  
    android:checkedButton="@id/option_twenty_percent"  
```  
* Use a `Switch` to let the user toggle between two options.  
```xml  
<Switch  
    android:id="@+id/round_up_switch"  
    android:layout_width="0dp"  
    android:layout_height="wrap_content"  
    android:checked="true"  
    android:text="Round up tip?"  
    app:layout_constraintEnd_toEndOf="parent"  
    app:layout_constraintStart_toStartOf="parent"  
    app:layout_constraintTop_toBottomOf="@id/tip_options" />  
```  
* You can add a label to a `Switch` without using a separate `TextView`.  
```xml  
    android:text="Round up tip?"  
```  
* Each child of a `ConstraintLayout` needs to have vertical and horizontal constraints.  
* Use "**start**" and "**end**" constraints to handle both Left to Right (LTR) and Right to Left (RTL) languages.  
* Names of the [constraint attributes](https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout) follow the form `layout_constraint<Source>_to<Target>Of`.  
    * `layout_constraintLeft_toLeftOf`  
    * `layout_constraintLeft_toRightOf`  
    * `layout_constraintRight_toLeftOf`  
    * `layout_constraintRight_toRightOf`  
    * `layout_constraintTop_toTopOf`  
    * `layout_constraintTop_toBottomOf`  
    * `layout_constraintBottom_toTopOf`  
    * `layout_constraintBottom_toBottomOf`  
    * `layout_constraintBaseline_toBaselineOf`  
    * `layout_constraintStart_toEndOf`  
    * `layout_constraintStart_toStartOf`  
    * `layout_constraintEnd_toStartOf`  
    * `layout_constraintEnd_toEndOf`  
* To make a `View` as wide as the `ConstraintLayout` it's in, constrain the start and end to the start and end of the parent, and set the width to 0dp.  
```xml  
<Button  
   android:id="@+id/calculate_button"  
   android:layout_width="0dp"  
   android:layout_height="wrap_content"  
   android:text="Calculate"  
   app:layout_constraintTop_toBottomOf="@id/round_up_switch"  
   app:layout_constraintStart_toStartOf="parent"  
   app:layout_constraintEnd_toEndOf="parent" />  
```  
  
<hr>  
  
### [Calculate the tip](https://developer.android.com/codelabs/basic-android-kotlin-training-tip-calculator)  
  
* View binding lets you more easily write code that interacts with the UI elements in your app.  
  
#### Enable view binding  
  
- Open the app's `build.gradle` file ( **Gradle Scripts > build.gradle (Module: Tip_Time.app)** )  
- In the android section, add the following lines:  
```groovy  
buildFeatures {  
    viewBinding true  
}  
```  
  
#### Using view binding  
  
- Declare a top-level variable in the class for the binding object. It's defined at this level because it will be used across multiple methods in MainActivity class.  
```kotlin  
lateinit var binding: ActivityMainBinding  
```  
- The `lateinit` keyword is something new. It's a promise that your code will initialize the variable before using it. If you don't, your app will crash.  
- Initializes the `binding` object which you'll use to access Views in the `activity_main.xml` layout.  
```kotlin  
binding = ActivityMainBinding.inflate(layoutInflater)  
```  
- Set the content view of the activity. Instead of passing the resource ID of the layout, `R.layout.activity_main`, this specifies the root of the hierarchy of views in your app, `binding.root`.   
```kotlin  
setContentView(binding.root)  
```  
- The full code in `MainActivity` now should be like:  
```kotlin  
class MainActivity : AppCompatActivity() {  
  
    lateinit var binding: ActivityMainBinding  
  
    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        binding = ActivityMainBinding.inflate(layoutInflater)  
        setContentView(binding.root)  
    }  
}  
```  
- Now when you need a reference to a `View` in your app, you can get it from the `binding` object instead of calling `findViewById()`. The` binding` object automatically defines references for every View in your app that has an ID. Using view binding is so much more concise that often you won't even need to create a variable to hold the reference for a View, just use it directly from the binding object.  
```kotlin  
// Old way with findViewById()  
val myButton: Button = findViewById(R.id.my_button)  
myButton.text = "A button"  
  
// Better way with view binding  
val myButton: Button = binding.myButton  
myButton.text = "A button"  
  
// Best way with view binding and no extra variable  
binding.myButton.text = "A button"  
```  
  
* The `Double` data type in Kotlin can store a decimal number. Kotlin provides a method for converting a `String` to a `Double`, called `toDouble()`.  
```kotlin  
val cost = binding.costOfService.text.toString().toDouble()  
```  
* Calling `toDouble()` on a string that is empty or a string that doesn't represent a valid decimal number doesn't work. Fortunately Kotlin also provides a method called `toDoubleOrNull()` which handles these problems. It returns a decimal number if it can, or it returns `null` if there's a problem.  
```kotlin  
val cost = stringInTextField.toDoubleOrNull()  
```  
* Use the `checkedRadioButtonId` attribute of a `RadioGroup` to find which `RadioButton` is selected.  
```kotlin  
val selectedId = binding.tipOptions.checkedRadioButtonId  
val tipPercentage = when (selectedId) {  
    R.id.option_twenty_percent -> 0.20  
    R.id.option_eighteen_percent -> 0.18  
    else -> 0.15  
}  
```  
* For a `Switch` element, you can check the `isChecked` attribute to see if the switch is "on".  
```kotlin  
val roundUp = binding.roundUpSwitch.isChecked  
```  
* To round a number you can use `kotlin.math.ceil()` method.  
```kotlin  
val tip = kotlin.math.ceil(tip)  
```  
* Use `NumberFormat.getCurrencyInstance()` to get a formatter to use for formatting numbers as currency.  
```kotlin  
val formattedTip = NumberFormat.getCurrencyInstance().format(tip)  
```  
* You can use string parameters like `%s` to create dynamic strings that can still be easily translated into other languages.  
```xml  
<string name="tip_amount">Tip Amount: %s</string>  
```  
* You can set the string parameters by calling `getString(R.string.tip_amount, formattedTip)` and assign that to the `text` attribute of the tip result `TextView`.  
```kotlin  
binding.tipResult.text = getString(R.string.tip_amount, formattedTip)  
```  
* When developing your app (and viewing the preview), it's useful to have a placeholder for that `TextView`.  
```xml  
<!-- android:text="@string/tip_amount" -->  
tools:text="Tip Amount: $10"  
```  
* Testing is important!  
* You can use **Logcat** in Android Studio to troubleshoot problems like the app crashing.  
* A stack trace shows a list of methods that were called. This can be useful if the code generates an exception.  
```  
2020-06-24 10:09:41.564 24423-24423/com.example.tiptime E/AndroidRuntime: FATAL EXCEPTION: main  
    Process: com.example.tiptime, PID: 24423  
    java.lang.NumberFormatException: empty String  
        at sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1842)  
        at sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)  
        at java.lang.Double.parseDouble(Double.java:538)  
        at com.example.tiptime.MainActivity.calculateTip(MainActivity.kt:22)  
        at com.example.tiptime.MainActivity$onCreate$1.onClick(MainActivity.kt:17)  
```  
* Exceptions indicate a problem that code didn't expect.  
* `Null` means "no value".  
* Not all code can handle `null` values, so be careful using it.  
* Use **Analyze > Inspect Code** for suggestions to improve your code.  
<hr>  
  
### [Change the app theme](https://developer.android.com/codelabs/basic-android-kotlin-training-change-app-theme)  
  
* Use the Material [Color Tool](https://material.io/resources/color/) to select colors for your app theme.  
* Alternatively, you can use the [Material palette generator](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) to help select a color palette.  
* Declare color resources in the `colors.xml` file to make it easier to reuse them.  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<resources>  
    <color name="purple_200">#FFBB86FC<_color>  
    <color name="purple_500">#FF6200EE<_color>  
    <color name="purple_700">#FF3700B3<_color>  
    <color name="teal_200">#FF03DAC5<_color>  
    <color name="teal_700">#FF018786<_color>  
    <color name="black">#FF000000<_color>  
    <color name="white">#FFFFFFFF<_color>  
</resources>  
```  
* Use the colors in your theme in `themes.xml`:  
```xml  
<resources xmlns:tools="http://schemas.android.com/tools">  
    <!-- Base application theme. -->  
    <style name="Theme.TipTime" parent="Theme.MaterialComponents.DayNight.DarkActionBar">  
        <!-- Primary brand color. -->  
        <item name="colorPrimary">@color/green</item>  
        <item name="colorPrimaryVariant">@color/green_dark</item>  
        <item name="colorOnPrimary">@color/white</item>  
        <!-- Secondary brand color. -->  
        <item name="colorSecondary">@color/blue</item>  
        <item name="colorSecondaryVariant">@color/blue_dark</item>  
        <item name="colorOnSecondary">@color/black</item>  
        <!-- Status bar color. -->  
        <item name="android:statusBarColor" tools:targetApi="l">?attr/colorPrimaryVariant</item>  
        <!-- Customize your theme here. -->  
    </style>  
</resources>  
```  
* Dark theme can reduce power usage and make your app easier to read in low light. (`themes.xml (night)`)  
```xml  
<resources xmlns:tools="http://schemas.android.com/tools">  
    <!-- Application theme for dark theme. -->  
    <style name="Theme.TipTime" parent="Theme.MaterialComponents.DayNight.DarkActionBar">  
        <!-- Primary brand color. -->  
        <item name="colorPrimary">@color/green_light</item>  
        <item name="colorPrimaryVariant">@color/green</item>  
        <item name="colorOnPrimary">@color/black</item>  
        <!-- Secondary brand color. -->  
        <item name="colorSecondary">@color/blue_light</item>  
        <item name="colorSecondaryVariant">@color/blue_light</item>  
        <item name="colorOnSecondary">@color/black</item>  
        <!-- Status bar color. -->  
        <item name="android:statusBarColor" tools:targetApi="l">?attr/colorPrimaryVariant</item>  
        <!-- Customize your theme here. -->  
    </style>  
</resources>  
```  
<hr>  
  
### [Change the app icon](https://developer.android.com/codelabs/basic-android-kotlin-training-change-app-icon)  
  
* Place app icon files in the `mipmap` resource directories.  
* Provide [different versions](https://developer.android.com/training/multiscreen/screendensities#TaskProvideAltBmp) of an app icon bitmap image in each density bucket (`mdpi`, `hdpi`, `xhdpi`, `xxhdpi`, `xxxhdpi`) for backwards compatibility with older versions of Android.  
    * `mdpi` \- resources for medium-density screens (~160 dpi)  
    * `hdpi` \- resources for high-density screens (~240 dpi)  
    * `xhdpi` \- resources for extra-high-density screens (~320 dpi)  
    * `xxhdpi` \- resources for extra-extra-high-density screens (~480dpi)  
    * `xxxhdpi` \- resources for extra-extra-extra-high-density screens (~640dpi)  
    * `nodpi` \- resources that are not meant to be scaled, regardless of the screen's pixel density  
* `anydpi` \- resources that scale to any density  
* Add resource qualifiers onto resource directories to specify resources that should be used on devices with a certain configuration (e.g. `v26`).  
* Vector drawables are Android's implementation of vector graphics. They are defined in XML as a set of points, lines, and curves along with associated color information. Vector drawables can be scaled for any density without loss of quality.  
* Adaptive icons were introduced to the Android platform in API 26. They are made up of a **foreground** and **background** layer that follow specific requirements, so that your app icon looks high-quality on a range of devices with different OEM masks.  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">  
    <background android:drawable="@drawable/ic_launcher_background" />  
    <foreground android:drawable="@drawable/ic_launcher_foreground" />  
</adaptive-icon>  
```  
* Use Image Asset Studio in Android Studio to create legacy and adaptive icons for your app.  
<hr>  
  
### [Create a more polished user experience](https://developer.android.com/codelabs/basic-android-kotlin-training-polished-user-experience)  
  
* Use [Material Design Components](https://material.io/components) where possible to adhere to Material Design guidelines and allow for more customization.  
* In `` Add:  
```groovy  
dependencies {  
    ...  
    implementation 'com.google.android.material:material:<version>'  
}  
```  
* To create a text field as shown above, use a `TextInputLayout` with an enclosed `TextInputEditText` from the MDC library. The Material text field can be easily customized to:  
    * Display input text or a label that's always visible  
    * Display an icon in the text field  
    * Display helper or error messages  
```xml  
<com.google.android.material.textfield.TextInputLayout  
   android:id="@+id/cost_of_service"  
   android:layout_width="160dp"  
   android:layout_height="wrap_content"  
   android:hint="@string/cost_of_service"  
   app:layout_constraintStart_toStartOf="parent"  
   app:layout_constraintTop_toTopOf="parent">  
  
   <com.google.android.material.textfield.TextInputEditText  
       android:layout_width="match_parent"  
       android:layout_height="wrap_content"/>  
  
</com.google.android.material.textfield.TextInputLayout>  
```  
* To use `SwitchMaterial`, you must explicitly specify `SwitchMaterial` in your layout and use the fully qualified path name. In the `activity_main.xml` layout, change the XML tag from `Switch` to:  
```xml  
<com.google.android.material.switchmaterial.SwitchMaterial  
    android:id="@+id/round_up_switch"  
    android:layout_width="0dp"  
    android:layout_height="wrap_content" ... />  
```  
* it's important to note that support for vector drawables on the Android platform wasn't added until [Android 5.0 (API level 21)](https://developer.android.com/guide/topics/graphics/vector-drawable-resources). in `` add:  
```groovy  
android {  
  defaultConfig {  
    ...  
    vectorDrawables.useSupportLibrary = true  
   }  
   ...  
}  
```  
* Add icons to give users visual cues about how parts of your app will function.  
```xml  
<ImageView  
    android:id="@+id/icon_service_question"  
    android:layout_width="wrap_content"  
    android:layout_height="wrap_content"  
    android:importantForAccessibility="no"  
    app:srcCompat="@drawable/ic_service"  
    app:layout_constraintStart_toStartOf="parent"  
    app:layout_constraintTop_toTopOf="@id/service_question"  
    app:layout_constraintBottom_toBottomOf="@id/service_question" />  
  
<TextView  
    android:id="@+id/service_question"  
    ...  
    android:layout_marginTop="16dp"  
    app:layout_constraintStart_toEndOf="@id/icon_service_question" />  
```  
* Use `ConstraintLayout` to position elements in your layout.  
* A [style](https://medium.com/androiddevelopers/android-styling-themes-vs-styles-ebe05f917578) is a collection of view attributes values for a single type of widget. For example, a `TextView` style can specify font color, font size, and background color, to name a few. By extracting these attributes into a style, you can easily apply the style to multiple views in the layout and maintain it in a single place (`styles.xml`).  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<resources>  
    <!-- TextView style -->  
    <style name="Widget.TipTime.TextView" parent="Widget.MaterialComponents.TextView">  
        <item name="android:minHeight">48dp</item>  
        <item name="android:gravity">center_vertical</item>  
        <item name="android:textAppearance">?attr/textAppearanceBody1</item>  
    </style>  
  
    <!-- Radio Button style -->  
    <style name="Widget.TipTime.CompoundButton.RadioButton" parent="Widget.MaterialComponents.CompoundButton.RadioButton">  
        <item name="android:paddingStart">8dp</item>  
        <item name="android:textAppearance">?attr/textAppearanceBody1</item>  
    </style>  
  
    <!-- Switch style -->  
    <style name="Widget.TipTime.CompoundButton.Switch" parent="Widget.MaterialComponents.CompoundButton.Switch">  
        <item name="android:minHeight">48dp</item>  
        <item name="android:gravity">center_vertical</item>  
        <item name="android:textAppearance">?attr/textAppearanceBody1</item>  
    </style>  
</resources>  
```  
* Test your app for edges cases (e.g. rotating your app in landscape mode) and make improvements where applicable.  
* You can add a `ScrollView` around the `ConstraintLayout` to prevent UI items from getting truncated in landscape mode.  
```xml  
<ScrollView  
   xmlns:android="http://schemas.android.com/apk/res/android"  
   xmlns:app="http://schemas.android.com/apk/res-auto"  
   xmlns:tools="http://schemas.android.com/tools"  
   android:layout_height="match_parent"  
   android:layout_width="match_parent">  
  
   <androidx.constraintlayout.widget.ConstraintLayout  
       android:layout_width="match_parent"  
       android:layout_height="wrap_content"  
       android:padding="16dp"  
       tools:context=".MainActivity">  
  
       ...  
   </ConstraintLayout>  
  
</ScrollView>  
```  
* Comment your code to help other people who are reading your code understand what your approach was.  
* Reformat your code and clean up your code to make it as concise as possible.  
  
#### Hide keyboard on Enter key  
  
It's a bit cumbersome to manually hide the keyboard each time to better access the calculate button. Instead, make the keyboard automatically hide itself when the Enter key is pressed.  
The `handleKeyEvent()` is a private helper function that hides the onscreen keyboard if the `keyCode` input parameter is equal to `KeyEvent.`_`KEYCODE_ENTER`_. The [InputMethodManager](https://developer.android.com/reference/android/view/inputmethod/InputMethodManager) controls if a soft keyboard is shown, hidden, and allows the user to choose which soft keyboard is displayed. The method returns true if the key event was handled, and returns false otherwise.  
```kotlin  
private fun handleKeyEvent(view: View, keyCode: Int): Boolean {  
   if (keyCode == KeyEvent.KEYCODE_ENTER) {  
       // Hide the keyboard  
       val inputMethodManager =  
           getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager  
       inputMethodManager.hideSoftInputFromWindow(view.windowToken, 0)  
       return true  
   }  
   return false  
}  
```  
The `onKey()` method takes in 3 input arguments: the view, the code for the key that was pressed, and a key event (which you won't use, so you can call it "`_`"). When the `onKey()` method is called, you should call your `handleKeyEvent()` method and pass along the view and key code arguments. The syntax for writing this out is: `view, keyCode, _ -> handleKeyEvent(view, keyCode).`  
```kotlin  
override fun onCreate(savedInstanceState: Bundle?) {  
   ...  
  
   setContentView(binding.root)  
  
   binding.calculateButton.setOnClickListener { calculateTip() }  
  
   binding.costOfServiceEditText.setOnKeyListener { view, keyCode, _ -> handleKeyEvent(view, keyCode)  
   }  
}  
```  
  
#### Adjust the tint of the vector drawables  
  
You can change the tint of the icons based on the primary color of the theme, so that the icons appear differently in light vs. dark theme.  
  
One of the advantages of `VectorDrawables` versus bitmap images is the ability to scale and tint them. Below we have the XML representing the bell icon. There are two specific color attributes to take notice of: `android:tint` and `android:fillColor`.  
```xml  
<vector xmlns:android="http://schemas.android.com/apk/res/android"  
   android:width="24dp"  
   android:height="24dp"  
   android:viewportWidth="24"  
   android:viewportHeight="24"  
   <!-- android:tint="?attr/colorControlNormal" -->  
   android:tint="?attr/colorPrimary">  
 <path  
     android:fillColor="@android:color/white"  
     android:pathData="M2,17h20v2L2,19zM13.84,7.79c0.1,-0.24 0.16,-0.51 0.16,-0.79 0,-1.1 -0.9,-2 -2,-2s-2,0.9 -2,2c0,0.28 0.06,0.55 0.16,0.79C6.25,8.6 3.27,11.93 3,16h18c-0.27,-4.07 -3.25,-7.4 -7.16,-8.21z"/>  
</vector>  
```  
<hr>  
  
## [Display a scrollable list](https://developer.android.com/courses/pathways/android-basics-kotlin-unit-2-pathway-2)  
  
### [Use Lists in Kotlin](https://developer.android.com/codelabs/basic-android-kotlin-training-lists)  
  
Kotlin provides functionality to help you manage and manipulate collections of data more easily through the Kotlin Standard Library. A collection can be defined as a number of objects of the same data type. There are different basic collection types in Kotlin: lists, sets, and maps. This codelab focused specifically on lists, and you'll learn more about sets and maps in future codelabs.  
  
* A list is an ordered collection of elements of a specific type, such as a list of `Strings.`  
```kotlin  
val numbers: List<Int> = listOf(1, 2, 3, 4, 5, 6)  
```  
* The index is the integer position that reflects the position of the element (e.g. `myList[2]`).  
```kotlin  
println("Second element: ${numbers[1]}")  
```  
* In a list, the first element is at index 0 (e.g. `myList[0]`), and the last element is at `myList.size-1` (e.g. `myList[myList.size-1]` or `myList.last()`).  
```kotlin  
println("Last index: ${numbers.size - 1}")  
println("Last element: ${numbers[numbers.size - 1]}")  
```  
* Kotlin also supports `first()` and `last()` operations on a list.  
```kotlin  
println("First: ${numbers.first()}")  
println("Last: ${numbers.last()}")  
```  
* Another useful list operation is the `contains()` method to find out if a given element is in the list.  
```kotlin  
println("Contains 4? ${numbers.contains(4)}")  
```  
* There are two types of lists: `List` and `MutableList.`  
* A `List` is read-only and cannot be modified once it has been initialized. However, you can apply operations such as `sorted()` and `reversed()` which return a new list without changing the original.  
```kotlin  
println("Sorted list: ${colors.sorted()}")  
println("Reversed list: ${colors.reversed()}")  
```  
* A `MutableList` can be modified after creation such as adding, removing, or modifying elements.  
```kotlin  
val entrees = mutableListOf<String>()  
val entrees: MutableList<String> = mutableListOf()  
println("Add noodles: ${entrees.add("noodles")}")  
println("Remove spaghetti: ${entrees.remove("spaghetti")}")  
println("Remove first element: ${entrees.removeAt(0)}")  
entrees.clear()  
```  
* You can add a list of items to a mutable list using `addAll()`.  
```kotlin  
val moreItems = listOf("ravioli", "lasagna", "fettuccine")  
println("Add list: ${entrees.addAll(moreItems)}")  
```  
* Kotlin gives you a way to check if a list is empty using [`isEmpty()`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/is-empty.html) function.  
```kotlin  
println("Empty? ${entrees.isEmpty()}")  
```  
* Use a `while` loop to execute a block of code until the expression evaluates to false and you exit the loop.  
  
```  
while (expression) {  
  
// While the expression is true, execute this code block  
  
}  
```  
```kotlin  
val guestsPerFamily = listOf(2, 4, 1, 3)  
var totalGuests = 0  
var index = 0  
while (index < guestsPerFamily.size) {  
    totalGuests += guestsPerFamily[index]  
    index++  
}  
println("Total Guest Count: $totalGuests")  
```  
  
* Use a `for` loop to iterate over all items of a list:  
  
```  
for (item in myList) {  
  
// Execute this code block for each element of the list  
  
}  
```  
```kotlin  
val names = listOf("Jessica", "Henry", "Alicia", "Jose")  
for (name in names) {  
    println("$name - Number of characters: ${name.length}")  
}  
```  
  
#### Variations of for loop  
  
Note: Here are some other variations of what you can do with for loops, including using them with ranges with specific steps (instead of incrementing by 1 each time).  
  
```kotlin  
for (item in list) print(item) // Iterate over items in a list  
  
for (item in 'b'..'g') print(item) // Range of characters in an alphabet  
  
for (item in 1..5) print(item) // Range of numbers  
  
for (item in 5 downTo 1) print(item) // Going backward  
  
for (item in 3..6 step 2) print(item) // Prints: 35  
```  
  
* The `vararg` modifier allows you to pass in a variable number of arguments to a function or constructor.  
```kotlin  
class Vegetables(vararg val toppings: String) : Item("Vegetables", 5) {  
    override fun toString(): String {  
        return name + " " + toppings.joinToString()  
    }  
}  
```  
* To specify a different separator other than a comma, pass in the desired separator string as an argument to the `joinToString()` method. Example: `joinToString(" ")` to separate each item with a space.  
<hr>  
  
### [Use RecyclerView to display a scrollable list](https://developer.android.com/codelabs/basic-android-kotlin-training-recyclerview-scrollable-list)  
  
* Organizing your code logically helps you and other developers understand, maintain, and extend it. In the same way that you can organize paperwork into files and folders, you can organize your code into files and packages.  
* `RecyclerView` widget helps you display a list of data.  
    * * **item** \- One data item of the list to display. Represents one `Affirmation` object in your app.  
    * **Adapter** \- Takes data and prepares it for `RecyclerView` to display.  
    * **ViewHolders** \- A pool of views for `RecyclerView` to use and reuse to display affirmations.  
* `ConstraintLayout` is ideal and flexible when you want to position multiple child views in a layout. Since your layout only has a single child view, `RecyclerView`, you can switch to a simpler `ViewGroup` called `FrameLayout` that should be used for holding a single child view.  
```xml  
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:app="http://schemas.android.com/apk/res-auto"  
    xmlns:tools="http://schemas.android.com/tools"  
    android:layout_width="match_parent"  
    android:layout_height="match_parent"  
    tools:context=".MainActivity">  
  
    <androidx.recyclerview.widget.RecyclerView  
        android:id="@+id/recycler_view"  
        android:layout_width="match_parent"  
        android:layout_height="match_parent"  
        android:scrollbars="vertical"  
        app:layoutManager="LinearLayoutManager" />  
  
</FrameLayout>  
```  
* `RecyclerView` uses the adapter pattern to adapt and display the data.  
* `ViewHolder` creates and holds the views for `RecyclerView`.  
```kotlin  
class ItemViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {  
    val textView: TextView = view.findViewById(R.id.item_title)  
}  
```  
* Each item in the `RecyclerView` has its own layout, which you define in a separate layout file. For example, `list_item.xml`.  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<TextView xmlns:android="http://schemas.android.com/apk/res/android"  
    android:id="@+id/item_title"  
    android:layout_width="wrap_content"  
    android:layout_height="wrap_content" />  
```  
* `RecyclerView` comes with built in `LayoutManagers`. `RecyclerView` delegates how items are laid out to `LayoutManagers`.  
```xml  
    app:layoutManager="LinearLayoutManager"  
```  
* To be able to scroll through a vertical list of items that is longer than the screen, you need to add a vertical scrollbar.  
```xml  
    android:scrollbars="vertical"  
```  
  
#### Create the Affirmation data class  
  
```kotlin  
package com.example.affirmations.model  
  
data class Affirmation(val stringResourceId: Int)  
```  
  
#### Create a class to be a data source  
  
Data displayed in your app may come from different sources (e.g. within your app project or from an external source that requires connecting to the internet to download data). As a result, data may not be in the exact format that you need. The rest of the app should not concern itself with where the data originates from or in what format it is originally. You can and should hide away this data preparation in a separate `Datasource` class that prepares the data for the app.  
For example we used strings as data sources:  
```xml  
<resources>  
    <string name="app_name">Affirmations</string>  
    <string name="affirmation1">I am strong.</string>  
    <string name="affirmation2">I believe in myself.</string>  
    ...  
    <string name="affirmation10">I will be present in all the moments that this day brings.</string>  
</resources>  
```  
The `Datasource` class code should be like this:  
```kotlin  
package com.example.affirmations.data  
  
import com.example.affirmations.R  
import com.example.affirmations.model.Affirmation  
  
  
class Datasource {  
  
    fun loadAffirmations(): List<Affirmation> {  
        return listOf<Affirmation>(  
            Affirmation(R.string.affirmation1),  
            Affirmation(R.string.affirmation2),  
            ...  
            Affirmation(R.string.affirmation10)  
        )  
    }  
}  
```  
  
#### How To implement the adapter:  
  
* Create a new class for the adapter, for example, `ItemAdapter`.  
* Create a custom `ViewHolder` class that represents a single list item view. Extend from `RecyclerView.ViewHolder` class.  
* Modify the `ItemAdapter` class to extend from the `RecyclerView`.`Adapter` class with the custom `ViewHolder` class.  
* Implement these methods within the adapter: `getItemsCount()`, `onCreateViewHolder()`, and `onBindViewHolder()`.  
```kotlin  
package com.example.affirmations.adapter  
  
import android.content.Context  
import android.view.LayoutInflater  
import android.view.View  
import android.view.ViewGroup  
import android.widget.TextView  
import androidx.recyclerview.widget.RecyclerView  
import com.example.affirmations.R  
import com.example.affirmations.model.Affirmation  
  
/**  
 * Adapter for the [RecyclerView] in [MainActivity]. Displays [Affirmation] data object.  
 */  
class ItemAdapter(  
    private val context: Context,  
    private val dataset: List<Affirmation>  
) : RecyclerView.Adapter<ItemAdapter.ItemViewHolder>() {  
  
    // Provide a reference to the views for each data item  
    // Complex data items may need more than one view per item, and  
    // you provide access to all the views for a data item in a view holder.  
    // Each data item is just an Affirmation object.  
    class ItemViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {  
        val textView: TextView = view.findViewById(R.id.item_title)  
    }  
  
    /**  
     * Create new views (invoked by the layout manager)  
     */  
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ItemViewHolder {  
        // create a new view  
        val adapterLayout = LayoutInflater.from(parent.context)  
            .inflate(R.layout.list_item, parent, false)  
  
        return ItemViewHolder(adapterLayout)  
    }  
  
    /**  
     * Replace the contents of a view (invoked by the layout manager)  
     */  
    override fun onBindViewHolder(holder: ItemViewHolder, position: Int) {  
        val item = dataset[position]  
        holder.textView.text = context.resources.getString(item.stringResourceId)  
    }  
  
    /**  
     * Return the size of your dataset (invoked by the layout manager)  
     */  
    override fun getItemCount() = dataset.size  
}  
```  
  
#### Modify the MainActivity to use a RecyclerView  
  
1. Create an instance of `Datasource`, and call the `loadAffirmations()` method on it. Store the returned list of affirmations in a `val` named `myDataset`.  
```kotlin  
    val myDataset = Datasource().loadAffirmations()  
```  
2. Create a variable called `recyclerView` and use `findViewById()` to find a reference to the `RecyclerView` within the layout.  
```kotlin  
    val recyclerView = findViewById<RecyclerView>(R.id.recycler_view)  
```  
3. To tell the `recyclerView` to use the `ItemAdapter` class you created, create a new `ItemAdapter` instance. `ItemAdapter` expects two parameters: the context (`this`) of this activity, and the affirmations in `myDataset`.  
4. Assign the `ItemAdapter` object to the `adapter` property of the `recyclerView`.  
```kotlin  
    recyclerView.adapter = ItemAdapter(this, myDataset)  
```  
5. Since the layout size of your `RecyclerView` is fixed in the activity layout, you can set the `setHasFixedSize` parameter of the `RecyclerView` to `true`. This setting is only needed to improve performance. Use this setting if you know that changes in content do not change the layout size of the `RecyclerView`.  
```kotlin  
    recyclerView.setHasFixedSize(true)  
```  
6. When you are done, the code for `MainActivity` should be similar to the following.  
```kotlin  
package com.example.affirmations  
  
import android.os.Bundle  
import androidx.appcompat.app.AppCompatActivity  
import androidx.recyclerview.widget.RecyclerView  
import com.example.affirmations.adapter.ItemAdapter  
import com.example.affirmations.data.Datasource  
  
class MainActivity : AppCompatActivity() {  
  
    override fun onCreate(savedInstanceState: Bundle?) {  
        super.onCreate(savedInstanceState)  
        setContentView(R.layout.activity_main)  
  
        // Initialize data.  
        val myDataset = Datasource().loadAffirmations()  
  
        val recyclerView = findViewById<RecyclerView>(R.id.recycler_view)  
        recyclerView.adapter = ItemAdapter(this, myDataset)  
  
        // Use this setting to improve performance if you know that changes  
        // in content do not change the layout size of the RecyclerView  
        recyclerView.setHasFixedSize(true)  
    }  
}  
```  
<hr>  
  
### [Display a list of images using cards](https://developer.android.com/codelabs/basic-android-kotlin-training-display-list-cards)  
  
* To display additional content in a `RecyclerView`, modify the underlying **data model class** and **data source**. Then update the **list item layout** and **adapter** to set that data onto the views.  
`Affirmation.kt`  
```kotlin  
package com.example.affirmations.model  
  
import androidx.annotation.DrawableRes  
import androidx.annotation.StringRes  
  
data class Affirmation(  
   @StringRes val stringResourceId: Int,  
   @DrawableRes val imageResourceId: Int  
)  
```  
`Datasource.kt`  
```kotlin  
package com.example.affirmations.data  
  
import com.example.affirmations.R  
import com.example.affirmations.model.Affirmation  
  
class Datasource() {  
  
    fun loadAffirmations(): List<Affirmation> {  
        return listOf<Affirmation>(  
            Affirmation(R.string.affirmation1, R.drawable.image1),  
            Affirmation(R.string.affirmation2, R.drawable.image2),  
            ...  
            Affirmation(R.string.affirmation10, R.drawable.image10)  
        )  
    }  
}  
```  
`list_item.xml`  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"  
    android:layout_width="match_parent"  
    android:layout_height="wrap_content"  
    android:orientation="vertical"  
    android:padding="16dp">  
  
    <ImageView  
        android:layout_width="match_parent"  
        android:layout_height="194dp"  
        android:id="@+id/item_image"  
        android:importantForAccessibility="no"  
        android:scaleType="centerCrop" />  
      
    <TextView  
        android:id="@+id/item_title"  
        android:layout_width="wrap_content"  
        android:layout_height="wrap_content"  
        android:padding="16dp"  
        android:textAppearance="?attr/textAppearanceHeadline6" />  
  
</LinearLayout>  
```  
`ItemAdapter.kt`  
```kotlin  
class ItemViewHolder(private val view: View): RecyclerView.ViewHolder(view) {  
    val textView: TextView = view.findViewById(R.id.item_title)  
    val imageView: ImageView = view.findViewById(R.id.item_image)  
}  
```  
```kotlin  
    override fun onBindViewHolder(holder: ItemViewHolder, position: Int) {  
        val item = dataset[position]  
        holder.textView.text = context.resources.getString(item.stringResourceId)  
        holder.imageView.setImageResource(item.imageResourceId)  
    }  
```  
* Use resource annotations to help ensure that the right type of resource ID is passed into a class constructor.  
```kotlin  
   @StringRes val stringResourceId: Int,  
   @DrawableRes val imageResourceId: Int  
```  
* Use the **Material Components for Android library** to have your app more easily follow the recommended Material Design guidelines.  
* Use `MaterialCardView` to display content in a Material card.  
```xml  
<?xml version="1.0" encoding="utf-8"?>  
<com.google.android.material.card.MaterialCardView xmlns:android="http://schemas.android.com/apk/res/android"  
    android:layout_width="match_parent"  
    android:layout_height="wrap_content"  
    android:layout_margin="8dp">  
  
    <LinearLayout  
        android:layout_width="match_parent"  
        android:layout_height="wrap_content"  
        android:orientation="vertical">  
  
        <ImageView  
            android:id="@+id/item_image"  
            android:layout_width="match_parent"  
            android:layout_height="194dp"  
            android:importantForAccessibility="no"  
            android:scaleType="centerCrop" />  
  
        <TextView  
            android:id="@+id/item_title"  
            android:layout_width="wrap_content"  
            android:layout_height="wrap_content"  
            android:padding="16dp"  
            android:textAppearance="?attr/textAppearanceHeadline6" />  
  
    </LinearLayout>  
  
</com.google.android.material.card.MaterialCardView>  
```  
* Small visual tweaks to your app in terms of color and spacing can make the app look more polished and consistent.  
* [Common Theme Attributes](https://medium.com/androiddevelopers/android-styling-common-theme-attributes-8f7c50c9eaba) allows you to use predefined text appearance values.  
