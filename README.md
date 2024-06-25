## Beecognition:An AI powered honey bees monitoring and tracking system

### Overview
Beecognition is a comprehensive platform designed to monitor and classify bee activity using advanced machine learning techniques. The project features two main functionalities: Image Classification and Video Monitoring, providing detailed insights into the behaviors and health of bee colonies.

### Features

#### 1. Image Classification
- **Description:** Classifies images of bees into four categories: pollen, varroa mite, wasp, and cooling state.
- **Functionality:** Each image is analyzed, and a prediction probability is provided for each category, offering a precise understanding of bee conditions.
- **Labels:** 
  - Pollen
  - Varroa mite
  - Wasp
  - Cooling state

#### 2. Video Monitoring
- **Description:** Tracks the in-out movement of bees, detects their arcs, and classifies them among the defined labels using colored dots.
- **Functionality:** Real-time video monitoring allows for tracking bee movements and behaviors within and around the hive.
- **Classification Dots:**
  - **Blue dot:** Pollen
  - **Red dot:** Varroa mite
  - **Green dot:** Bee is cooling the hive
  - **Black dot:** Detected a wasp

### Demo
Watch the demo video of the Beecognition project: [Beecognition Demo Video](https://res.cloudinary.com/drz6w1d5q/video/upload/v1719299409/beecognition-demo-video_v3krmt.mp4)

**OR** 

![](./beecognition-demo-video.mp4)


### Technologies Involved

#### Frontend
- **React:** For building the user interface.
- **SCSS:** For styling the application.
- **HTML5/CSS3:** Markup and style sheet languages for structuring and designing the web pages.

#### Backend
- **Flask:** A lightweight WSGI web application framework in Python.
- **REST APIs:** For communication between the frontend and backend services.

#### Model
- **TensorFlow/Keras:** For building and training the machine learning models.
- **OpenCV:** For real-time computer vision tasks.
- **Scikit-learn:** For additional machine learning utilities and functions.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Anushri-Rawat/BeeCognition.git

2. Run Frontend setup
   ```bash
   cd beecognition/frontend
   npm install
   npm run dev

3. Run Backend setup
   ```bash
   cd beecognition/backend
   pip install
   python main.py

