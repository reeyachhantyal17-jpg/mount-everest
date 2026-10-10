# Mount Everest Restaurant & Bar — editable website code

This folder contains plain HTML, CSS, and JavaScript. No build tools, packages, or terminal commands are required to use it. Nothing has been published.

## 1. Extract and open the code

1. Download `mount-everest-code.zip`.
2. On Windows, right-click it and choose **Extract All**.
3. Open the extracted `mount-everest-code` folder.
4. Double-click `index.html` to view your work locally. Use the navigation to open the other pages.
5. To change code, open a file in Visual Studio Code or another plain-text editor. Save, then refresh the browser.

## 2. Create your GitHub repository

1. Sign in at https://github.com.
2. Click the **+** button near the top-right, then **New repository**.
3. Name it `mount-everest-restaurant`.
4. Choose **Private** while you are working, or **Public** if you want the source visible to everyone.
5. Select **Add a README file**, then click **Create repository**.

## 3. Upload your files

1. Open your new repository.
2. Click **Add file → Upload files**.
3. Open the extracted folder on your computer. Select the files and the `images` folder INSIDE it and drag them into GitHub. Do not upload the ZIP itself or the outer folder.
4. Confirm `index.html` will appear at the repository root, alongside `styles.css`, `script.js`, and the other HTML files.
5. If GitHub limits the number of files in one upload, upload the HTML/CSS/JS files first, then upload the images folder separately in batches while preserving the `images/` path. Use GitHub Desktop if browser folder uploading is inconvenient.
6. Enter a commit message such as `Add restaurant website design` and click **Commit changes**.

Uploading stores the source code. It does not replace the restaurant’s current website.

## 4. Understand each file

| File | What you edit |
| --- | --- |
| `index.html` | Home page, restaurant introduction, chef/owner section |
| `menu.html` | Menu heading, search controls, ordering link |
| `menu-data.js` | Dish names, prices, categories, photo paths |
| `gift-cards.html` | Gift card text and existing purchase link |
| `gallery.html` | Photo gallery and captions |
| `contact.html` | Contact details, form fields, directions |
| `styles.css` | Colors, fonts, spacing, responsive layout |
| `script.js` | Mobile navigation, menu filtering, gallery, contact form |
| `images/` | Logo, chef photograph, food photographs, mountain background |

The common header and footer are regular HTML copied into every page for beginner-friendly editing. If you change the address, hours, or navigation, update all five HTML files.

## 5. Make edits on GitHub

1. Click a filename in your repository, for example `index.html`.
2. Click the pencil icon (**Edit this file**).
3. Change the text between HTML tags. Keep the surrounding tags intact.
4. Click **Commit changes**, enter a short description, and confirm.
5. To download your latest version for local viewing, select **Code → Download ZIP**, extract it, and open `index.html`.

Example: change a price in `menu-data.js`:

```javascript
"name": "Vegetable Momo",
"price": "$14.99"
```

Example: change your color theme at the top of `styles.css`:

```css
:root {
  --red: #a92330;
  --blue: #122e4d;
  --white: #fffcf7;
}
```

## 6. Set up actual contact-form delivery

Initially, the contact form creates an email draft in the visitor's email application. It clearly says the message is not sent until the visitor sends the draft. If no email application is configured, the page provides the restaurant email address.

For direct delivery without an email app:

1. Visit https://formspree.io and create a form under the account that will manage restaurant messages.
2. Configure and verify the intended recipient email address with the service.
3. Copy that form's endpoint, for example `https://formspree.io/f/abcdefgh` (this is an example, not an active endpoint).
4. Open `script.js`. Find:

```javascript
const CONTACT_ENDPOINT = "";
```

5. Replace it with your endpoint:

```javascript
const CONTACT_ENDPOINT = "https://formspree.io/f/YOUR_ACTUAL_FORM_ID";
```

6. Save and commit. After deployment, send a test message and confirm it reaches the intended inbox. Also test an invalid email and a failed connection. The endpoint is public; never put an account password or private API key in these files.

## 7. Hosting the restaurant's production website

GitHub stores your code; a hosting service makes it available at a public URL. GitHub Pages has commercial-use restrictions, so it is not the recommended production host for this design with ordering and gift-card links. Use a hosting service that supports business websites and can deploy a static site from a GitHub repository. This code needs no build command and its publish directory is the repository root.

Keep the current domain and website in place until the new version is reviewed and its ordering, gift-card, and contact paths have been tested. No hosting account or domain settings have been changed by this code package.

GitHub policy: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## 8. Photos and content

- Restaurant source: https://www.mounteverestrestaurant.net/
- Chef/owner information and photo: https://www.mounteverestrestaurant.net/about-us
- Menu names, categories, prices and available dish photos: https://www.mounteverestrestaurant.net/menu
- Gallery photos: https://www.mounteverestrestaurant.net/gallery
- Gift cards: https://www.mounteverestrestaurant.net/gift-card
- Restaurant content retrieved October 9, 2026. Verify current prices and hours before launch. No unsupported owner biography details or changing experience-year totals were added.
- The original chef image includes another person and has been retained as supplied.
- Menu dishes without a provided photo have a clearly styled text panel, rather than an unrelated food image. Add a photo path to their `image` field to replace it.
- Himalayan photograph: shrimpo1967, derivative by Papa Lima Whiskey 2, CC BY-SA 2.0. Original: https://commons.wikimedia.org/wiki/File:Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg
- Mountain photo is cropped by CSS for display. Keep the visible attribution links in the footer. The image remains under https://creativecommons.org/licenses/by-sa/2.0/ . Restaurant photos and logo retain their existing ownership.

## 9. Check your work before launching

- Open all five pages and click every navigation link.
- Search the menu, change categories, and search a made-up dish to check the empty state.
- On a narrow browser window, open/close the navigation. Use Tab and Escape to test keyboard interaction.
- Open a gallery photo, then close with the button or Escape.
- Test the contact form and verify actual email delivery if an endpoint is configured.
- Verify ordering and gift-card checkout on the existing provider. This code does not process payments or store orders.
- Confirm the logo, mountain image, chef photo, and dish photos load.
