# React Portfolio
During this project we were supposted to redo our portfolio project in React and work with styled components.
The design should be more or less pixel perfect, apart from colors and pictures.

<img width="1177" alt="Screenshot 2022-10-24 at 11 04 16" src="https://user-images.githubusercontent.com/108176641/197489758-c10b2e64-2cae-4b73-9c4e-42b130141975.png">

** Project requirements **

✓ The app should be built with React and Styled Components

✓ Your app should have reusable components and reusable styled components

✓ Your app should look as close as possible to the given design

✓ The app should fetch data in JSON format (either your own JSON file or the response from GitHub’s API)

Wireframes:
https://www.figma.com/file/lORDsFWR32UA6HKdNzqF2w/Portfolio---Technigo-Bootcamp?node-id=0%3A1


## The problem
I made a weekly plan in figma and made a structure of the site, i.g. what components I should create as react components and styled components and which ones should be reusable. I fetched the API first, but after looking at the content I decided to create a JSON file instead that I find easier to adjust and work with. I spent quite some time on understand the methods filtering and includes better and how to solve only showing some projects on my page. I solved it by creating two arrays in my JSON file; one array called highlighs (project showing on the page) with only the project id in it, and one array with all my project data.
After fetching data  I filtered the data by comparing the two arrays using the method including:

const filteredProjects = projects.filter((project) => highlights.includes(project.id));

The reusable components were created at last. 
I do need to work a bit more on my styling and accesability.


Things I plan on improving:
* Section "Other projects":
  Fetch data from my json file.
  Layout is broken.
  Add GitHub links.

* The Link component:
  Add props and layout, to display color and text.

* Design:
  Add background picture to the header.
  Fix bug with fonts, font weight is not working properly.

## View it live
https://petra-eriksson-portfolio.netlify.app/
