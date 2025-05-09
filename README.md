# Photo Tutorials App

A beautiful, minimalist, and animated photo tutorial application built with HTML, CSS, and JavaScript.

## Features

- Clean, modern UI with smooth animations
- Responsive design that works on all devices
- Search functionality for finding tutorials
- Beautiful card-based layout
- Loading animations and transitions
- Sample tutorial data (can be replaced with real API data)

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Use the search bar to find tutorials
4. Click on tutorial cards to view details

## Customization

### Adding New Tutorials

To add new tutorials, modify the `sampleTutorials` array in `script.js`:

```javascript
const sampleTutorials = [
    {
        id: 5,
        title: "Your Tutorial Title",
        description: "Your tutorial description",
        image: "Your image URL"
    }
];
```

### Styling

The app uses CSS variables for easy customization. Modify the `:root` section in `styles.css` to change colors and other properties:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --background-color: #your-color;
    --text-color: #your-color;
    --card-shadow: your-shadow;
}
```

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- JavaScript (ES6+)
- Font Awesome for icons

## Future Improvements

- Add real API integration
- Implement tutorial categories
- Add user authentication
- Include tutorial ratings and comments
- Add dark mode support 