/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #121212;
  color: #ffffff;
}

/* Navbar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f1f1f;
  padding: 15px 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-icons {
  display: flex;
  align-items: center;
}

#search {
  padding: 5px;
  margin-right: 10px;
}

#dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 50px 20px;
  background: #282828;
}

.hero h1 {
  font-size: 36px;
}

.hero p {
  font-size: 18px;
  margin-top: 10px;
}

/* Articles Section */
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
}

.card {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.card h2 {
  margin-top: 15px;
}

.card a {
  display: inline-block;
  margin-top: 10px;
  color: #ff6600;
  text-decoration: none;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background: #1f1f1f;
}

.social-links a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
