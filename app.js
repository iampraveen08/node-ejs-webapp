const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
    const title = 'Home Page';
    const user = { name: 'John Doe', age: 28, hobbies: ['coding', 'reading', 'hiking'] };
    
    // Render 'index.ejs' with dynamic content
    res.render('index', { title, user });
});

// Route for the 'about' page
app.get('/about', (req, res) => {
    const title = 'About Us';
    const description = 'We are a company that values coding, learning, and hiking.';
    
    // Render 'about.ejs' with dynamic content
    res.render('about', { title, description });
});

// Route for the 'contact' page
app.get('/contact', (req, res) => {
    const title = 'Contact Us';
    const contactInfo = { email: 'contact@company.com', phone: '+1 (555) 555-5555' };
    
    // Render 'contact.ejs' with dynamic content
    res.render('contact', { title, contactInfo });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
