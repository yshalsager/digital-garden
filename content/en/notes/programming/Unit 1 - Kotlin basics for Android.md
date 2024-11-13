---
created: 2022-05-22 14:35:00
updated: 2022-06-20 18:25:00
title: Unit 1 - Kotlin basics for Android
share: true
cssclass: ltr
website: en/notes/programming
---
# [Unit 1: Kotlin basics for Android](https://developer.android.com/courses/android-basics-kotlin/unit-1)

## [Android Basics: Introduction to Kotlin](https://developer.android.com/courses/pathways/android-basics-kotlin-one)

### [Write your first program in Kotlin](https://developer.android.com/codelabs/basic-android-kotlin-training-first-kotlin-program)

* [https://developer.android.com/training/kotlinplayground](https://developer.android.com/training/kotlinplayground) is an interactive code editor on the web where you can practice writing Kotlin programs.
* All Kotlin programs need to have a `main()` function: `fun main() {}`
* Use the `println()` function to print a line of text.
* Place text you want to print between double quotes. For example `"Hello"`.
* Repeat the `println()` instruction to print multiple lines of text.
* Errors are marked red in the program. There is an error message in the output pane to help you figure out where the error is and what might be causing it.

```kotlin
fun main() {
    println("Happy Birthday!")
}
```

<hr>

### [Create a birthday message in Kotlin](https://developer.android.com/codelabs/basic-android-kotlin-training-kotlin-birthday-message)

* Create a variable using the `val` keyword and a name. Once set, this value cannot be changed. Assign a value to a variable using the equal sign. Examples of values are text and numbers.

```kotlin
val age = 5
```

* Use `${}` to surround variables and calculations in the text of print statements. For example: `${age}` where `age` is a variable.* A `String` is text surrounded by quotes, such as `"Hello"`.

```kotlin
println("You are already ${age} days old, ${name}!")
```

* An `Int` is a whole positive or negative number, such as 0, 23, or -1024.
* You can pass one or more arguments into a function for the function to use, for example:  

```kotlin
fun printCakeBottom(age: Int, layers: Int) {}
```

* Use a `repeat() {}` statement to repeat a set of instructions several times. For example:

```kotlin
repeat (23) { print("%") }
repeat (layers) { print("@@@@@@@@@@") }
```

* A _loop_ is an instruction to repeat instructions multiple times. A `repeat()` statement is an example of a loop.
* You can nest loops, that is, put loops within loops. For example, you can create a `repeat()` statement within a `repeat()` statement to print a symbol a number of times for a number of rows, like you did for the cake layers.

```kotlin
fun printCakeBottom(age: Int, layers: Int) {
    repeat(layers) {
        repeat(age + 2) {
            print("@")        
        }
        println()
    }
}
```

**Summary of using function arguments:** To use arguments with a function, you need to do three things:

* Add the argument and type to the function definition: `printBorder(border: String)`
* Use the argument inside the function: `println(border)`
* Supply the argument when you call the function: `printBorder(border)`

<hr>

## [Android Basics: Create your first Android app](https://developer.android.com/courses/pathways/android-basics-kotlin-two)

### [Create and run your first Android app](https://developer.android.com/codelabs/basic-android-kotlin-training-first-template-project)

* To create a new project, start Android Studio, click **Start a new Android Studio project**, name your project, choose a template (Usually **Empty Activity**), and fill in the details (Choose `API 19: Android 4.4 (KitKat)` as **Minimum SDK**).
* To create an Android virtual device (an emulator) to run your app, choose **Tools > AVD Manager** and then use the [AVD Manager](http://developer.android.com/tools/devices/managing-avds.html) to select a hardware device and system image.
* To run your app on a virtual device, make sure you have created a device, select the device from the toolbar dropdown menu, and then run your app by clicking the **Run** icon! choose Run > Run app or click the Run icon in the toolbar.
* To find your project files, in the **Project** window, select **Project Source Files** from the dropdown.

<hr>

## [Android Basics: Build a basic layout](https://developer.android.com/courses/pathways/android-basics-kotlin-three)

### [Create a Birthday Card app](https://developer.android.com/codelabs/basic-android-kotlin-training-birthday-card-app)

* The **Layout Editor** helps you create the UI for your Android app.
* Almost everything you see on the screen of your app is a `View`. `Views` can be interactive, like a clickable button or an editable input field.
* A `TextView` is a UI element for displaying text in your app.

```xml
<TextView
    android:id="@+id/textView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginStart="16dp"
    android:layout_marginTop="16dp"
    android:fontFamily="sans-serif-light"
    android:text="Happy Birthday Sam!"
    android:textColor="@android:color/black"
    android:textSize="36sp"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

* A `ConstraintLayout` is a container for other UI elements.

```xml
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout\_width="match\_parent"
    android:layout\_height="match\_parent"
    tools:context=".MainActivity">
</androidx.constraintlayout.widget.ConstraintLayout>
```

* `Views` need to be constrained horizontally and vertically within a `ConstraintLayout`.
* One way to position a `View` is with a margin.
* A margin says how far a `View` is from an edge of the container it's in.
* You can set attributes on a `TextView` like the font, text size, and color.

<hr>

### [Add images to your Android app](https://developer.android.com/codelabs/basic-android-kotlin-training-birthday-card-app-image)

* The**Resource Manager**in Android Studio helps you add and organize your images and other resources.
* An `ImageView` is a UI element for displaying images in your app.
* `ImageViews` should have a content description to help make your app more accessible.

```xml
<ImageView
    android:id="@+id/imageView"
    android:layout_width="0dp"
    android:layout_height="0dp"
    android:importantForAccessibility="no"
    android:scaleType="centerCrop"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent"
    app:srcCompat="@drawable/androidparty" />
```

* Text that is shown to the user like the birthday greeting should be extracted into a string resource to make it easier to translate your app into other languages.

```xml
android:text="@string/happy_birthday_text"
```

<hr>

## [Android Basics: Add a button to an app](https://developer.android.com/courses/pathways/android-basics-kotlin-four)

### [Classes and object instances in Kotlin](https://developer.android.com/codelabs/basic-android-kotlin-training-create-dice-roller-in-kotlin)

* Call the `random()` function on an `IntRange` to generate a random number: `(1..6).random()`

```kotlin
fun main() {
    val diceRange = 1..6
    val randomNumber = diceRange.random()
    println("Random number: ${randomNumber}")
}
```

* Classes are like a blueprint of an object. They can have properties and behaviors, implemented as variables and functions.

```kotlin
class Dice {
    var sides = 6
    fun roll() {
        val randomNumber = (1..6).random()
        println(randomNumber)
    }
}
```

* An instance of a class represents an object, often a physical object, such as a dice. You can call the actions on the object and change its attributes.

```kotlin
fun main() {
    val myFirstDice = Dice()
    println(myFirstDice.sides)
    myFirstDice.roll()
}
```

* You can supply values to a class when you create an instance. For example: `class Dice(val numSides: Int)` and then create an instance with `Dice(6)`.

```kotlin
class Dice (val numSides: Int) {

    fun roll(): Int {
        return (1..numSides).random()
    }
}
```

* Functions can return something. Specify the data type to be returned in the function definition, and use a`return`statement in the function body to return something. For example: `fun example(): Int { return 5 }`

```kotlin
fun roll(): Int {
     val randomNumber = (1..6).random()
     return randomNumber
}
```

<hr>

### [Create an interactive Dice Roller app](https://developer.android.com/codelabs/basic-android-kotlin-training-create-dice-roller-app-with-button)

* The top-level or first activity is often called the `MainActivity` and is provided by the project template. For example, when the user scrolls through the list of apps on their device and taps on the "Dice Roller" app icon, the Android System will start up the `MainActivity` of the app.

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
```

* Add a `Button` in an Android app using the **Layout Editor**.

```xml
<Button
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@string/roll"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toBottomOf="@+id/textView" />
```

* Modify the `MainActivity.kt` class to add interactive behavior to the app.

```kotlin
val rollButton: Button = findViewById(R.id.button)
rollButton.setOnClickListener {
    // code here
}
```

* Pop up a `Toast` message as a temporary solution to verify you're on the right track.

```kotlin
val toast = Toast.makeText(this, "Dice Rolled!", Toast.LENGTH_SHORT)
toast.show()
// Or you could combine the two lines in the click listener into a single line without a variable.
Toast.makeText(this, "Dice Rolled!", Toast.LENGTH_SHORT).show()
```

* Set an on-click listener for a `Button` using `setOnClickListener()` to add behavior for when a `Button` is clicked.

```kotlin
rollButton.setOnClickListener {
        val resultTextView: TextView = findViewById(R.id.textView)
        resultTextView.text = "6"
    }
```

```kotlin
class Dice(val numSides: Int) {

   fun roll(): Int {
       return (1..numSides).random()
   }
}
rollButton.setOnClickListener { rollDice() }
/**
* Roll the dice and update the screen with the result.
*/
private fun rollDice() {
   // Create new Dice object with 6 sides and roll it
   val dice = Dice(6)
   val diceRoll = dice.roll()

   // Update the screen with the dice roll
   val resultTextView: TextView = findViewById(R.id.textView)
   resultTextView.text = diceRoll.toString()
}
```

* When the app is running, you can update the screen by calling methods on the `TextView`, `Button`, or other UI elements in the layout.
* Comment your code to help other people who are reading your code understand what your approach was.
* Reformat your code and clean up your code.

<hr>

### [Add conditional behavior in Kotlin](https://developer.android.com/codelabs/basic-android-kotlin-training-conditional-dice-roll-behavior)

* Use an `if` statement to set a condition for executing some instructions. For example, if the user rolls the lucky number, print a winning message.

```kotlin
fun main() {
   val num = 5
   if (num > 4) {
       println("The variable is greater than 4")
   }
}
```

* The `Boolean` data type has values of `true` and `false` and can be used for decision making.
* Compare values using operators such as greater than (`>`), less than (`<`), and equal to (\-).
* Use a chain of `else if` statements to set multiple conditions. For example, print a different message for each possible dice roll.
* Use an `else` statement at the end of a chain of conditions to catch any cases that may not be covered explicitly. If you cover the cases for 6-sided dice, an `else` statement would catch the 7 and 8 numbers rolled with an 8-sided dice.

```kotlin
fun main() {
    val num = 4
    if (num > 4) {
        println("The variable is greater than 4")
    } else if (num == 4) {
        println("The variable is equal to 4")
    } else {
        println("The variable is less than 4")
    }
}
```

* Use a `when` statement as a compact form of executing code based on comparing a value.

```kotlin
when (rollResult) {
    luckyNumber -> println("You won!")
    1 -> println("So sorry! You rolled a 1. Try again!")
    2 -> println("Sadly, you rolled a 2. Try again!")
    3 -> println("Unfortunately, you rolled a 3. Try again!")
    4 -> println("No luck! You rolled a 4. Try again!")
    5 -> println("Don't cry! You rolled a 5. Try again!")
    6 -> println("Apologies! you rolled a 6. Try again!")
}
```

#### General form of if-else

```
if (condition-is-true) {

execute-this-code

} else if (condition-is-true) {

execute-this-code

} else {

execute-this-code

}
```

#### When statement

```
when (variable) {

matches-value -> execute-this-code

matches-value -> execute-this-code

}
```

<hr>

### [Add images to the Dice Roller app](https://developer.android.com/codelabs/basic-android-kotlin-training-dice-roller-images)

* Use[`setImageResource()`](https://developer.android.com/reference/android/widget/ImageView#setImageResource(int))to change the image that's displayed in an `ImageView`

```kotlin
private fun rollDice() {
    val dice = Dice(6)
    val diceRoll = dice.roll()
    val diceImage: ImageView = findViewById(R.id.imageView)
    diceImage.setImageResource(R.drawable.dice_2)
}
```

* Use control flow statements like `if / else` expressions or `when` expressions to handle different cases in your app, for example, showing different images under different circumstances.

```kotlin
/**
* Roll the dice and update the screen with the result.
*/
private fun rollDice() {
    // Create new Dice object with 6 sides and roll the dice
    val dice = Dice(6)
    val diceRoll = dice.roll()

    // Find the ImageView in the layout
    val diceImage: ImageView = findViewById(R.id.imageView)

    // Determine which drawable resource ID to use based on the dice roll
    val drawableResource = when (diceRoll) {
        1 -> R.drawable.dice_1
        2 -> R.drawable.dice_2
        3 -> R.drawable.dice_3
        4 -> R.drawable.dice_4
        5 -> R.drawable.dice_5
        else -> R.drawable.dice_6
    }

    // Update the ImageView with the correct drawable resource ID
    diceImage.setImageResource(drawableResource)

    // Update the content description
    diceImage.contentDescription = diceRoll.toString()
}
```

<hr>
