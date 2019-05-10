## 5.0 Software Requirements

### 5.1 Introduction

This system includes multiple componenets of the web app including the user interface as well as the algorithm for sorting the matchings. 

------

### 5.2 Functional Requirements

##### 5.2.1 Graphical User Interface

5.2.1.1 The graphical user interface shall provide information about the process and how the web app works.

5.2.1.2 The graphical user interface shall allow for the input of the names of the "bigs" and the "littles" that they are matching up on a separate page.

5.2.1.3 The graphical user interface shall provide a place to input the preferences of each person previously input in the bigs and littles page.

5.2.1.4 The graphical user interface shall pop-up errors and warnings if the user tries to move on without completing the necessary input options.

​	The errors will happen if: 

* The user tries to put more preferences than there are bigs or littles

* The user does not put in any names for bigs or littles

* The user does not select a number for the amount of bigs, littles, or preferences

  The warnings will happen if:

* Any people don't have their preferences fully filled out
* The user does not put in as many bigs as they stated they had originally

5.2.1.5 The graphical user interface shall ask for specifics about the organizer's process.

​	The specifics will include:

- The number of bigs in the process
- The number of littles in the process
- The number of preferences that everyone in the process selected

5.2.1.6 The graphical user interface shall provide a confirmation screen with a table of the final matches.

------

### 5.3 Performance Requirements

##### 5.3.1 Return Time

5.3.1.1 The application shall have loaded the final page within 20 seconds of clicking the button on the previous page. 

5.3.1.2 The application shall move through the other pages from page to page in less than 2 seconds of the user's time.

------

### 5.4 Environment Requirements

##### 5.4.1 Development Environment Requirements

5.4.1.1 The development environment shall be a text editor.

5.4.1.2 The website shall be written in CSS, HTML, and Javascript.

5.4.1.3 The script shall be written in Javascript.

##### 5.4.2 Execution Environment Requirements

5.4.2.1 The website shall be available to be accessed from Google Chrome.

5.4.2.2 The website shall be available to be accessed on Github Pages.

------

