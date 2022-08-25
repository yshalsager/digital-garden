---  
created: 2022-05-22 13:55  
updated: 2022-06-20 18:25  
title: Build Responsive Real-World Websites with HTML and CSS Study Notes  
share: true  
website: en/notes/programming  
---  
```toc  
```  
  
## Section 5: Web Design Rules and Framework  
  
|                                                      **Good Design**                                                      |                                  **Bad Design**                                  |  
| :-----------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |  
|                          Creates an immediate and lasting good impression of the brand or product                         | Makes users believe the brand doesn’t really care about their product or service |  
|                                         Makes the user trust the brand right away                                         |                 Makes the user insecure about trusting the brand                 |  
|                                Increases the user's perceived value of the brand or product                               |                      Makes the brand or product seem “cheap”                     |  
| Gives users exactly what they were looking for when coming to the site, e.g. purchasing a product or finding information. |     Leaves users confused, and makes it hard to for them to reach their goal.    |  
  
> [!success] Good web design  is not subjective or creative  
> Everyone can learn basics by following a  framework/system  
  
### Web Design Ingredients  
  
1. [](#Typography)  
2. [](#Colors)  
3. [](#Images_Illustrations)  
4. [](#Icons)  
5. [](#Shadows)  
6. [](#Border-radius)  
7. [](#White%20Space)  
8. [](#Visual%20Hierarchy)  
9. [](#User%20Experience)  
10. [](#Components_Layout)  
  
### Typography  
  
#### Serif vs Sans-serif  
  
![](CSS%20Typography#%5Edf4a8f)  
![](CSS%20Typography#%5Ef8e4fb)  
  
#### Use Good Typefaces  
  
1. Use only good and popular typefaces and play it safe  
2. It’s okay to use just one typeface per page! If you want more, limit to 2 typefaces.  
3. Choose the **right typeface** according to your website personality:  
   1. Choose the right personality for your website (more on this later)  
   2. Decide between a serif and sans-serif typeface  
   3. Experiment with all the “good” typefaces (and other typefaces from Google Fonts! to see which ones best fits your website’s message (this will come with experience)  
   4. You can keep trying different typefaces as you design and build the page  
  
#### Use Good Font Sizes And Weights  
  
4. When choosing font-sizes, **limit choices**! Use a “**[type scale](https://type-scale.com/)**” tool or other **pre-defined** range.  
5. Use a font size between 16px and 32px for “**normal**” text.  
6. For **long** text (like a blog post), try a size of 20px or even bigger.  
7. For **headlines**, you can go really big 50px+) and bold 600, depending on **personality**.  
8. For any text, don’t use a font weight under 400 (regular).  
  
![](../../../Pasted%20image%2020220522155721.png)  
  
#### Create a Good Reading Experience  
  
9. Use less than 75 characters per line.  
10. For normal-sized text, use a line height between 1.5 and 2. For big text, go below 1.5.  
    - The **smaller** or **longer** the text, the **larger** the line height needs to be!  
11. Decrease letter spacing in headlines, if it looks unnatural (this will come from experience).  
12. Experiment with all caps for short titles. Make them small and bold and increase letter-spacing.  
13. Usually, don’t justify text.  
14. Don’t center long text blocks. Small blocks are fine.  
  
### Colors  
  
#### Choose the Right Color  
  
1. Make the main color **match your website’s personality**: colors convey meaning!  
   - <mark style="background: #FF5582A6;">Red<_mark> draws a lot of attention, and symbolizes power, passion, and excitement.  
   - <mark style="background: #FFB86CA6;">Orange<_mark> is less aggressive, and conveys happiness, cheerfulness, and creativity.  
   - <mark style="background: #FFF3A3A6;">Yellow<_mark> means joy, brightness, and intelligence.  
   - <mark style="background: #BBFABBA6;">Greens<_mark> represents harmony, nature, growth, and health.  
   - <mark style="background: #ADCCFFA6;">Blue<_mark> is associated with peace, trustworthiness, and professionalism.  
   - <mark style="background: #D2B3FFA6;">Purple<_mark> conveys wealth, wisdom, and magic.  
   - <mark style="background: #FFB8EBA6;">Pink<_mark> represents romance, care, and affection.  
   - <mark style="background: brown;">Brown</mark> is associated with nature, durability and comfort.  
   - <mark style="background: #CACFD9A6;">Black<_mark> symbolizes power, elegance and minimalism, but also grief and sorrow.  
2. Use a **good color tone**! Don’t choose a random tone or CSS named colors.  
   - <https://yeun.github.io/open-color/>  
   - <https://tailwindcss.com/docs/customizing-colors/>  
   - <http://flatuicolors.com>  
  
#### Establish a Color System  
  
3. You need at least two types of colors in your **color palette**: **a main color** and **a grey color**.  
4. With more experience, you can add more colors: **accent (secondary) colors** (use a tool).  
5. For diversity, create lighter and darker “versions” (**tints and shades**).  
   - <http://paletton.com>  
   - <https://maketintsandshades.com>  
   - <https://coolors.co/contrast-checker/>  
  
#### When And How To Use Colors  
  
6. Use your main color to **draw attention** to the most important elements on the page.  
7. Use colors to add **interesting accents** or make **entire components or sections** stand out.  
8. You can try to use your color strategically in **images and illustrations**.  
  
#### Colors And Typography  
  
9. On dark colored backgrounds, try to **use a tint of the background** (“lighter version”) for text.  
10. Text should usually not be completely black. **Lighten if up** it looks heavy and uninviting.  
11. **Don’t make text too light!** Use a tool to check contrast between text and background colors.  
    - Contrast ratio needs to be at least **4.5:1** for normal text and **3:1** for large text 18px+)  
  
### Images  
  
#### Use Good Images  
  
1. Different types of images: **product photos, storytelling photos, illustrations, patterns**.  
2. Use images to support your website’s **message and story**. So only use **relevant images**!  
3. Prefer **original images**. If not possible, use **original-looking** stock images (not generic ones!)  
   - <https://unsplash.com>  
   - <https://www.pexels.com>  
   - <https://www.drawkit.io>  
   - <https://undraw.co/illustrations>  
  
#### Use Images Well  
  
4. Try to show **real people** to trigger user’s emotions.  
5. If necessary, **crop images** to fit your message.  
6. Experiment **combining** photos, illustrations and patterns.  
  
#### Handling Text On Images  
  
7. **Method #1** Darker or brighten image (completely or partially, using a gradient).  
8. **Method #2** Position text into neutral image area.  
9. **Method #3** Put text in a box.  
  
#### Some Technical Details  
  
10. To account for **high-res screens**, make image dimensions **2x as big** as their displayed size.  
    - **Scale factor**: Actual pixels the screen contains / Pixels represented on screen.  
    - On **high-res screens**, scale factor is **2x** or even **3x**, on “normal” screens it’s just **1x** 1 physical pixel 1 design pixel).  
11. **Compress images** for a lower file size and better performance. ([Squoosh](https://squoosh.app/))  
12. When using multiple images side-by-side, make sure they have the **exact same dimensions**.  
  
### Icons  
  
#### Use Good Icons  
  
1. Use a **good icon pack**, there are tons of **free** and paid icons packs. (You can use emojis too)  
   - <https://ionic.io/ionicons>  
   - <https://phosphoricons.com>  
   - <http://fontawesome.io>  
2. Use **only one** icon pack. **Don’t mix** icons from different icon packs.  
3. Use **SVG icons or icon fonts**. Don’t use bitmap image formats (.jpg and .png)!  
4. Adjust to website personality! **Roundness, weight** and **filled/outlined** depend on typography.  
  
#### When To Use Icons  
  
5. Use icons to provide **visual assistance** to text.  
6. Use icons for **product feature blocks**.  
7. Use icons **associated with actions**, and **label them** (unless no space or icon is 100% clear).  
8. Use icons as **bullet points**.  
  
#### Use Icons Well  
  
9. To keep icons neutral, **use same color as text**. To draw more attention, **use different color**.  
10. Don’t confuse your users: icons need to make sense and **fit the text or action!**  
11. Don't make icons larger than what they **were designed for**. If needed, **enclose them in a shape**.  
  
**[SVG Fills and Strokes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes#using_css=)**  
  
```css  
#logo {  
   stroke: black;  
   fill: blue;  
 }  
```  
  
### Shadows  
  
- After an era of 100% flat design, we’re now back to using shadows in UI design (“flat design 2.0”).  
- **Shadow creates depth 3D**: the more shadow, the further away from the interface the element is.  
- Shadows can be used on **boxes and text**.  
  
The **`box-shadow`** [CSS property](http://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.  
  
```css  
/* offset-x | offset-y | color */  
box-shadow: 60px -16px teal;  
  
/* offset-x | offset-y | blur-radius | color */  
box-shadow: 10px 5px 5px black;  
  
/* offset-x | offset-y | blur-radius | spread-radius | color */  
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);  
```  
  
The **`text-shadow`** [CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its [`decorations`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration). Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.  
  
```css  
/* offset-x | offset-y | blur-radius | color */  
text-shadow: 1px 1px 2px black;  
  
/* color | offset-x | offset-y | blur-radius */  
text-shadow: #fc0 1px 0 10px;  
  
/* offset-x | offset-y | color */  
text-shadow: 5px 5px #558abb;  
  
/* color | offset-x | offset-y */  
text-shadow: white 2px 5px;  
  
/* offset-x | offset-y  
/* Use defaults for color and blur-radius */  
text-shadow: 5px 10px;  
```  
  
#### Use Shadows Well  
  
1. You **don’t have to use** shadows! Only use them if it makes sense for the **website personality**.  
2. Use shadows **in small doses**: don’t add shadows to every element!  
3. Go light on shadows, don’t make them **too dark**!  
  
#### Use Shadows In the Right Situation  
  
4. Use **small shadows** for smaller elements that should stand out (to draw attention).  
5. Use **medium-sized shadows** for larger areas that should stand out a bit more.  
6. Use **large shadows** for elements that should really **float above** the interface.  
7. Experiment with **changing shadows** on mouse interaction (click and hover).  
8. Bonus: Experiment with **glows** (colored shadows)  
  
### Border-radius  
  
The **`border-radius`** [CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.  
  
```css  
/* The syntax of the first radius allows one to four values */  
/* Radius is set for all 4 sides */  
border-radius: 10px;  
  
/* top-left-and-bottom-right | top-right-and-bottom-left */  
border-radius: 10px 5%;  
  
/* top-left | top-right-and-bottom-left | bottom-right */  
border-radius: 2px 4px 2px;  
  
/* top-left | top-right | bottom-right | bottom-left */  
border-radius: 1px 0 3px 4px;  
  
/* The syntax of the second radius allows one to four values */  
/* (first radius values) / radius */  
border-radius: 10px / 20px;  
  
/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */  
border-radius: 10px 5% / 20px 30px;  
  
/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */  
border-radius: 10px 5px 2em / 20px 25px 30%;  
  
/* (first radius values) / top-left | top-right | bottom-right | bottom-left */  
border-radius: 10px 5% / 20px 25em 30px 35em;  
```  
  
#### Use Border Radius Well  
  
1. Use border-radius to **increase the playfulness** and fun of the design, to make it **less serious**.  
2. Typefaces have a certain roundness: make sure that border-radius **matches that roundness**!  
3. Use border-radius on **buttons, images, around icons, standout sections** and **other elements**.  
  
### White Space  
  
#### Why White space  
  
- The right amount of white space makes designs look **clean, modern and polished**.  
- White space communicates how different pieces of information are **related to one another**.  
- White space implies **invisible relationships between the elements** of a layout.  
  
#### Where To Use White space  
  
1. Use tons of white space **between sections**.  
2. Use a lot of white space **between groups of elements**.  
3. Use white space **between elements**.  
4. Inside **groups of elements**, try to use white space **instead of lines**.  
  
#### How Much White space  
  
5. **The more some elements** (or groups of elements) **belong together, the closer they should be!**  
6. Start with **a lot of white space**, maybe even too much! Then **remove white space** from there. Too much white space looks **detached**, too little looks too **crammed**.  
7. Match **other design choices**. If you have big text or big icons, you need more white space.  
8. Try a hard rule, such as using **multiples of 16px** for all spacing  
  
### Visual Hierarchy  
  
#### What Is Visual Hierarchy?  
  
- Visual hierarchy is about **establishing which elements** of a design **are the most important ones**.  
- Visual hierarchy is about **drawing attention** to these most important elements.  
- Visual hierarchy is about **defining a “path” for users**, to **guide** them through the page.  
- We use a combination of **position, size, colors, spacing, borders, and shadows** to establish a meaningful visual hierarchy between elements/components.  
  
#### Visual Hierarchy Fundamentals  
  
1. Position important elements **closer to the top the page**, where they get more attention.  
2. Use images mindfully, as they draw **a lot of attention** (larger images get more attention)  
3. White space creates separation, so **use white space strategically** to emphasize elements  
  
#### VISUAL HIERARCHY FOR TEXT ELEMENTS  
  
5. For text elements, use **font size, font weight, color, and white space** to convey importance.  
6. What text elements to emphasize? **Titles, sub-titles, links, buttons, data points, icons**.  
   - You can also **de-emphasize** less important text, like **labels** or **secondary/additional information**.  
  
#### VISUAL HIERARCHY BETWEEN COMPONENTS  
  
6. Emphasize an important component using **background color, shadow, or border** (or multiple).  
7. Try emphasizing some component A over component B by **de-emphasizing component B**.  
8. What components to emphasize? **Testimonials, call-to-action sections, highlight sections, preview cards, forms, pricing tables, important rows/columns in tables**, etc.  
  
### User Experience  
  
User Experience UX is the overall experience the user has while interacting with the product.  
  
#### UX Rules For Usability  
  
1. Don’t design complicated layouts. Don’t reinvent the wheel. **Use patterns that users know**.  
2. Make your call-to-action the **most prominent element**, and make the **text descriptive**.  
3. Use **blue text** and **underlined text** only for **links**!  
4. Animations should have a **purpose** and **be fast**: between 200 and 500 ms.  
5. In forms, align labels and fields in a **single vertical line**, to make the form **easier to scan**.  
6. Offer users **good feedback** for all actions: form errors, form success, etc. [web apps].  
7. Place action buttons where they will **create an effect** (law of locality) [web apps].  
  
#### UX Rules For Website Content  
  
8. Use a **descriptive, keyword-focused headline** on your main page. Don’t be vague or fancy!  
9. Only include **relevant information**, efficiently! **Cut out fluff** and make the content 100% clear.  
10. Use **simple words**! Avoid technical jargon and “smart-sounding” words.  
11. Break up long text with **sub-headings, images, block quotes, bullet points**, etc.  
  
### Website Personalities  
  
|      **Key**      |                                              **Serious/Elegant**                                              |                                                    **Minimalist/Simple**                                                   |                                                        **Plain/Neutral**                                                        |                                                 **Bold/Confident**                                                 |                                                         **Calm/Peaceful**:                                                         |                                                      **Startup/Upbeat**                                                      |                                                        **Playful/Fun**                                                        |  
| :---------------: | :-----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |  
|    **Overview**   | For luxury and elegance, based on thin serif typefaces, golden or pastel colors, and big high-quality images. | Focuses on the essential text content, using small or medium-sized sans-serif black text, lines, and few images and icons. | Design that gets out of the way by using neutral and small typefaces, and a very structured layout. Common in big corporations. | Makes an impact, by featuring big and bold typography, paired with confident use of big and bright colored blocks. | For products and services that care, transmitted by calming pastel colors, soft serif headings, and matching images/illustrations. | Widely used in startups, featuring medium-sized sans-serif typefaces, light-grey text and backgrounds, and rounded elements. | Colorful and round designs, fueled by creative elements like hand-drawn icons or illustrations, animations, and fun language. |  
|   **Industries**  |             Real estate, high fashion, jewelry, luxury products or services  small body font size             |                                Fashion, portfolios, minimalism companies, software startups                                |                    Well-established corporations, companies that don’t want to make an impact through design                    |                           Digital agencies, software startups, travel, “strong" companies                          |                                     Healthcare, all products with focus on consumer well-being                                     |                                     Software startups, and other modern-looking companies                                    |                                             Child products, animal products, food                                             |  
|   **Typography**  |               Serif typefaces (especially in headings), light font weight, small body font size               |                                  Boxy/squared sans-serif typefaces, small body font sizes                                  |             Neutral-looking sans-serif typefaces are used, and text is usually small and doesn’t have visual impact             |   Boxy/squared sans-serif typefaces, big and bold typography, especially headings. Uppercase headings are common   |      Soft serif typefaces frequently used for headings, but sans-serif headings might be used too (e.g for software products)      |   Medium-sized headings (not too large), usually one sans-serif typeface in whole design. Tendency for lighter text colors   |             Round and creative (e.g. handwritten) sans-serif typefaces are frequent. Centered text is more common             |  
|     **Colors**    |                                 Gold, pastel colors, black, dark blue or grey                                 |             Usually black or dark grey, on pure white background. Usually just one color throughout the design             |                    Safe colors are employed, nothing too bright or to washed-out. Blues and blacks are common                   |                Usually multiple bright colors. Big color blocks/sections are used to draw attention                |                               Pastel/washed-out colors: light oranges, yellows, browns, greens, blues                              |         Blues, greens and purples are widely used. Lots of light backgrounds (mainly gray), gradients are also common        |                 Multiple colors are frequently used to design a colorful layout, all over backgrounds and text                |  
|     **Images**    |                  Big, high-quality images are used to feature elegant and expensive products                  |      Few images, which can be used to add some color to the design. Usually no illustrations, but if, than just black      |                                    Images are frequently used, but usually in a small format                                    |                                      Lots of big images are usually displayed                                      |                                   Images and illustrations are usual, matching calm color palette                                  |    Images or illustrations are always used. 3D illustrations are modern. Sometimes patterns and shapes add visual details    |            Images, hand-drawn (or 3D) illustrations, and geometric shapes and patterns are all very frequently used           |  
|     **Icons**     |                             Usually no icons, but thin icons and lines may be used                            |                                 Usually no icons, but small simple black icons may be used                                 |                                          Usually no icons, but simple icons may be used                                         |                                                  Usually no icons                                                  |                                                      Icons are quite frequent                                                      |                                                    Icons are very frequent                                                   |                                   Icons are very frequent, many times in a hand-drawn style                                   |  
|    **Shadows**    |                                               Usually no shadows                                              |                                                     Usually no shadows                                                     |                                                        Usually no shadows                                                       |                                                 Usually no shadows                                                 |                                           Usually no shadows, but might be used sparingly                                          |                                    Subtle shadows are frequent. Glows are becoming modern                                    |                                      Subtle shadows are quite common, but not always used                                     |  
| **Border Radius** |                                            Usually no border-radius                                           |                                                  Usually no border-radius                                                  |                                                     Usually no border-radius                                                    |                                              Usually no border-radius                                              |                                                     Some border-radius is usual                                                    |                                                 Border-radius is very common                                                 |                                                  Border-radius is very common                                                 |  
|     **Layout**    |                               A creative and experimental layout is quite common                              |                                  Simple layout, a narrow one-column layout is quite common                                 |                                   Structured and condensed layout, with lots of boxes and rows                                  |                                   All kinds of layouts, no particular tendencies                                   |                                           All kinds of layouts, no particular tendencies                                           |                                 Rows of cards and Z-patterns are usual, as well as animations                                |                                         All kinds of layouts, no particular tendencies                                        |  
  
### Components/Layout  
  
Next section  
  
---  
  
## Section 6: Components and Layout Patterns  
  
### From Elements to Web Page  
  
#### Elements  
  
1. Use common elements and components to convey your website’s information.  
2. Combine components into layouts using common layout patterns.  
3. Assemble different layout areas into a complete, final page.  
  
##### Examples  
  
1. Text  
2. Buttons  
3. Images  
4. Input elements  
5. Tags  
  
#### Components  
  
##### Examples  
  
1. Breadcrumbs  
2. Pagination  
3. Alert and status bars  
4. Statistics  
5. Gallery  
6. Feature box  
7. Preview and profile cards  
8. Accordion  
   - [](01-accordion.html)  
9. Tabs  
10. Carousel  
    - [](02-carousel.html)  
11. Customer testimonials  
12. Customer logos  
13. Featured-in logos  
14. Steps  
15. Forms  
16. Tables  
17. Pricing tables  
18. Modal windows  
  
#### Layouts  
  
##### Examples  
  
1. Navigation  
2. Hero section  
3. Footer  
4. Call-to-action section  
5. Feature row  
  
#### Web page  
  
##### Examples  
  
1. Row of boxes or cards  
2. Grid of boxes or cards  
3. Z-Pattern  
4. F-Pattern  
5. Single-column  
6. Sidebar  
7. Multi-column/magazine  
8. Asymmetry/Experimental  
  
### [CSS Vertical Centering With Absolute Position and Transform](CSS%20Vertical%20Centering%20With%20Absolute%20Position%20and%20Transform)  
  
## Section 7: Omnifood Project: Setup and Desktop Version  
  
### The Process Behind Building a Website  
  
See in the PDF.  
  
#### 1. Define  
  
- Define **WHO the website is for**. Is it for yourself? For a client of your agency or your freelancing business.  
- Define **WHAT the website is for**. In other words, define **business and user goals** of your website project.  
  - **Business goal example**: Selling premium cat food.  
  - **User goal example**: Finding high-quality cat food for good price.  
- Define a target audience. Be really specific if possible and if it makes sense for your website (this can come from your client).  
  - Example: “Women, 20 to 40 years old, living in Europe, earning over 2000€/month, with a passion for cats”.  
  
#### 2. Plan  
  
- Plan and gather **website content**: copy (text), images, videos etc.  
- Content is usually **provided by the client**, but you also can help them produce and find some content (simply finding free images is easiest, but if they want copy, charge them extra).  
- For bigger sites, plan out the **sitemap**: what pages the site needs, and how they are related to one another (content hierarchy).  
- Based on the content, plan what **sections** each page needs in order to convey the content’s message, and in which order.  
- Define the **website personality**.  
  
#### 3. Sketch  
  
**Sketch Layout And Component Ideas**  
  
- Think about what **components** you need, and how you can use them in **layout patterns** (Get inspiration in web design section).  
- **Get ideas out of your head**: sketch them with **pen and paper** or with some design software (e.g. Figma ).  
- This is an **iterative process**: experiment with different components and layouts, until you arrive at a first good solution.  
- You don’t need to sketch everything, and **don’t make it perfect**. At some point, you’re ready to jump into HTML and CSS.  
  
#### 4. Design And Build  
  
- Use decisions, content and sketches from Steps 1, 2 and 3 to **design and build the website with HTML and CSS** (“designing in the browser”).  
- You already have the **layout** and **components** that you selected in Step 3. In this step, you need to design the actual **visual styles**.  
- Create the design based on selected **website personality**, the **design guidelines** I showed you, and **inspiration**. (Refer to web design section)  
- Use the **client’s branding** (it if exists already) for design decisions whenever possible: **colors, typography, icons**, etc.  
  
#### 5. Test And Optimize  
  
- Make sure website works well in **all major browsers** Chrome, Firefox, Safari, Edge, maybe even old IE).  
- Test the website on **actual mobile devices**, not just in DevTools.  
- Optimize all **images**, in terms of dimensions and file size (See images part in section 5).  
- Fix simple **accessibility** problems (e.g. color contrast issues).  
- Run the **Lighthouse** performance test in Chrome DevTools and try to fix reported issues.  
- Think about **Search Engine Optimization** (SEO).  
  
#### 6. Launch  
  
- Once all work is done, everything is perfect, and you got approval from your client (or yourself), it’s time to **share** your masterpiece with the world!  
- Upload your website files to a **hosting platform**. There are countless platform, we will use one with a free plan (E.g. Netlify).  
- Choose and buy a great **domain name**, one that represents the brand well, is memorable and easy to write.  
  
#### 7. Maintain And Update  
  
- Launching is not the end...  
- Keep the website content **updated over time**. If you’re working with a client, you can create a monthly maintenance contract (recurring revenue).  
- Install **analytics software** (e.g. Google Analytics or Fathom) to get statistics about website users. This may **inform future changes** in the site structure and content.  
- A **blog** that is updated regularly is a good way to keep users coming back, and is also good for SEO.  
  
### Responsive Design Principles  
  
- Design technique to make a web page adjust its layout and visual style to **any possible screen size** (window or view port size).  
- In practice, this means that responsive design makes websites usable on **all devices**, such as desktop computers, tablets, and mobile phones.  
  
#### Responsive Design Ingredients  
  
##### 1. Fluid Layouts  
  
- To allow web page to adapt to the **current view port** width (or even height).  
- Use `%` (or `vh` / `vw`) unit instead of `px` for elements that **should adapt to view port** (usually layout).  
- Use `max-width` instead of `width`.  
  
```css  
body {  
  /* width: 1000px; */  
  max-width: 1000px;  
}  
```  
  
##### 2. Responsive Units  
  
- Use `rem` unit instead of `px` for most lengths.  
  - `rem`: Root Element Font Size.  
- To make it easy to **scale the entire layout** down (or up) automatically.  
- **Helpful trick**: setting `1rem` to `10px` for easy calculations.  
  - By default `1rem` = `16px`  
-  
  
```css  
/* This will change the value of 1 rem */  
html {  
  /* font-size: 10px; */ /* But this will cause problems with people who change browser's font size */  
  /* Percentage of user's browser font size setting */  
  font-size: 62.5%; /* 10px / 16px = 0.625 = 62.5% */  
}  
```  
  
##### 3. Flexible Images  
  
- By default, images **don’t scale automatically** as we change the view port, so we need to fix that.  
- Always use `%` for image dimensions, together with the `max-width` property.  
  
##### 4. Media Queries  
  
- Bring responsive sites to life!  
- To change CSS styles on **certain view port widths** (called breakpoints).  
  
```css  
/* Maximum width at which media query still applies */  
/*  “Is width <= 600px ?” */  
@media (max-width: 600px)  
```  
  
## Tricks  
  
- [](CSS%20Global%20Reset)  
- [](CSS%20Reusable%20Grid)  
- [](CSS%20Make%20Image%20Color%20Grey)  
- [](CSS%20Add%20border%20inside%20element)  
- [](CSS%20Vertical%20Centering%20With%20Absolute%20Position%20and%20Transform)  
- [](CSS%20Change%20rem%20unit%20default%20value)  
- [](CSS%20Focus%20better%20handling)  
- [](CSS%20Simple%20link%20hover%20animation)  
- [](CSS%20Hide%20Element)  
- [](CSS%20Create%20mobile%20navigation%20version%20from%20desktop%20one)  
- [](CSS%20Smooth%20scrolling)  
- [](CSS%20Sticky%20navigation%20with%20JavaScript)  
  
CSS Transition: `translation: background-color 0.3s;`  
