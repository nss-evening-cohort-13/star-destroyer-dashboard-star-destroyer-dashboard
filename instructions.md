# Star Destroyer Dashboard

Nutshell is a new product offering that you have been tasked with building. 
You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

- Functions
- Databases/API
- Github
- Objects
- CSS/SASS
- Handling user events
- Data entry/editing
- Modular code with Webpack
- Relational data
- CRUD

# Mentor
Abbey


## Project Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* Jquery for any DOM manipulation (selectors, modifying css classes, events)
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

### Planning and Setup
For planning and setup, your team will need to divide and conquer. All of these items will need to be completed and reviewed by noon on Saturday.

- Create an ERD and add to Readme
- Create Wireframes on Figma and add to Readme

#### Setup:
- Create a setup branch and setup webpack (make a ticket for this first)
  - Issue Ticket Template
  - Pull request Template
  - Set up readme
  
- Create 2 branches: `Main` and `Development`
  - Protect the `Main` branch from merging (DO NOT MERGE TO MAIN UNTIL APPROVAL FROM YOUR MENTOR IS OBTAINED)
  - All development should be done on the `Development` branch
  - When a milestone is completed, make a PR against the `Main` branch for your mentor to review.
  - DO NOT move on to another milestone until everyone on your team is completed with the milestone AND you get approval from your mentor.
  
- Create a new firebase project and enable google authentication
  - Share API keys with team (DO NOT PUSH TO GITHUB)
  - One person run deploys
___

### Expectations
- Break each section below into milestones
- Deploy each milestone
- Deployed URL on Readme
- Create a PR against the `Main` branch with:
  - The tickets completed that sprint
  - Explanation of what was completed in the sprint

## Week 1:

## Description
Your team has been assigned to the Imperial I-class Star Destroyer, Devastator. Upon arriving from the Royal Imperial Academy you are to begin work on a systems dashboard that will include Personnel, Weapons, Planetary Sectors, Planetary Systems and a database of Enemies. Authenticated operators will be able to perform full CRUD on each of these modules, and Galactic Empire branding will be evident on all view screens. Note that weapons systems will include complement vehicles such as TIE line starfighters for ship to ship combat, AT-AT & AT-ST vehicles for planetary ground assaults, as well as turbolaser batteries and ion cannons for planetary bombardments. Long live the Empire!

### Week 1 Requirements:
* Authenticate to perform any actions (CUD)
* Personnel
* Weapons
* Sectors
* Enemies (Ships, People, Organizations, Planetary systems)
* Galactic Empire branding

**Stretch goal:** Planetary Systems

## Week 1 User Stories
#### Authentication
* As a user, when I am unauthenticated I should be able to see the dashboard (Read only).
* As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRUD).	
* As a user, I should be able to login via google.
* As a user, I should be able to logout

#### Personnel
* As a user, I should be able to view all Personnel.
* As a user, I should be able to add Personnel.
* As a user, I should be able to edit Personnel.
* As a user, I should be able to remove Personnel.

#### Weapons
* As a user, I should be able to view all active Weapons.
* As a user, I should be able to create a Weapon.
* As a user, I should be able to edit a Weapon.
* As a user, I should be able to delete a Weapon.

#### Planetary Sectors
* As a user, I should be able to view all the Planetary Sectors.
* As a user, I should be able to add a Planetary Sector.
* As a user, I should be able to edit a Planetary Sector.
* As a user, I should be able to delete a Planetary Sector.

#### Enemies
* As a user, I should be able to view all the Enemies.
* As a user, I should be able to add an Enemy.
* As a user, I should be able to edit an Enemy.
* As a user, I should be able to delete an Enemy.

### Stretch Goals
#### Planetary Systems
* As a user, I should be able to view all Planetary Systems.
* As a user, I should be able to add a Planetary System.
* As a user, I should be able to edit a Planetary System.
* As a user, I should be able to delete a Planetary System.

## Week 2
### Description
Lord Vader was most displeased with the lack of progress from the original team, and they have been dispatched. Your team will depart Ryloth immediately and join the Devastator in the Abrion sector, more specifically the Rishi system. You will first complete the tasks assigned to the first team if need be, and then you will add a targeting system to the dashboard. This system will identify enemy targets within Planetary Systems, and assign Personnel to Weapons systems for strikes against those Enemies via missions. Failure will result in termination. Long live the Empire!
### Week 2 Requirements:
* Missions
* Use Weapons on Enemies in Planetary Systems/Sectors
* Personnel can operate Weapons
**Stretch goal:** Mission Logs
## Week 2 User Stories
#### Missions
* As a user, I should be able to view all Missions.
* As a user, I should be able to add a Mission.
* As a user, I should be able to edit a Mission.
* As a user, I should be able to delete a Mission.
* As a user, I should be able to add Personnel to a Mission.
* As a user, I should be able to edit Mission Personnel.
* As a user, I should be able to delete Mission Personnel.
* As a user, I should be able to add Weapons to a Mission.
* As a user, I should be able to edit Mission Weapons.
* As a user, I should be able to delete Mission Weapons.
* As a user, I should be able to add a Planetary System to a Mission.
* As a user, I should be able to edit a Mission Planetary System.
* As a user, I should be able to delete a Mission Planetary System.
* As a user, I should be able to add an Enemy target to a Mission.
* As a user, I should be able to edit a Mission Enemy target.
* As a user, I should be able to delete an Enemy Mission target.
* As a user, when I select a Mission I should be able to view all Personnel, Weapons, Planetary Systems and Enemy targets associated with that Mission.
### Stretch Goals
#### Mission Logs
* As a user, I should be able to view all Mission Logs.
* As a user, I should be able to add a Mission Log that contains the results of a Mission.
* As a user, I should be able to edit a Mission Log.
* As a user, I should be able to delete a Mission Log.
#### Missions
* As a user, I should be able to randomize a Mission outcome.
* As a developer, I should take into account losses incurred by both sides of the Mission and update the database respectively.
#### Enemies
* As a user, I should be able to update an Enemy status depending on the outcome of a Mission.
#### Weapons
* As a user, I should be able to update Weapons depending on the outcome of a Mission.
#### Personnel
* As a user, I should be able to update Personnel depending on the outcome of a Mission.
