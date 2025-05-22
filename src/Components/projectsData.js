// projectsData.js
export const techList = ["All", "Frontend","Backend","Full Stack"];

export const projects = [
  
  {
    id: 1,
    title: "Blog App",
    description:"A dynamic MERN stack blogging platform with user authentication, email verification, and rich social features — including post creation, likes, shares, comments, and follow/unfollow — enabling seamless content engagement and community building.",
    category : ["Full Stack"],
    technologies: ["React","Redux","MongoDB","Node.js","Express","Vercel","Render"],
    image: "/assets/blogApp.png",
    liveLink: "https://blogging-app-client-five.vercel.app",
    codeLink: "https://github.com/Sadia-Naaz/Blogging_App_Client.git"
  },
  {
    id: 2,
    title: "To-do App",
    description: "A RESTful task management API built with Node.js and MongoDB, allowing users to add, edit, and delete tasks. Designed for scalability and secure operations, this backend system enables seamless task tracking through intuitive API endpoints.",
    category: ["Backend"],
    technologies: ["MongoDB","Node.js","Express","Render"],
    image: "/assets/todoList.png",
    liveLink: "https://your-todo.com",
    codeLink: "https://github.com/Sadia-Naaz/TaskBoard.git"
  },
  {
    id: 3,
    title: "Podcast App",
    description: "A responsive podcast streaming platform built with React and Redux, featuring user authentication, dynamic search, and seamless audio playback. Users can explore podcasts, manage their accounts, and access all episodes under a single podcast with an intuitive, user-friendly UI.",
    category: ["Frontend"],
    technologies: ["React","Redux","Firebase","vercel"],
    image: "/assets/Podcast.png",
    liveLink: "https://heaven-of-podcasters.vercel.app",
    codeLink: "https://github.com/Sadia-Naaz/PodcastHub.git"
  },
   
];
