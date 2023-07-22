import React from 'react'
import "../style.css"

function Main() {
  return (
    <div>
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="..."><span>Portfolio</span><span>-Website</span></a></div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
            <li><a href="#about" className="menu-btn"><strong>About</strong></a></li>
            <li><a href="#Services" className="menu-btn"><strong>Services</strong></a></li>
            <li><a href="#skills" className="menu-btn"><strong>Skills</strong></a></li>
            <li><a href="#projects" className="menu-btn"><strong>Projects</strong></a></li>
            <li><a href="#contact" className="menu-btn"><strong>Contact</strong></a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        </nav>
        </div>
    
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
              <div className="text-1">Hi, I am</div>
              <div className="text-2">Akshit</div>
              <div className="text-3  typewriter"> I'm Web-Developer</div>
              <a className='hiremeBtn' href="https://wa.me/+91 8871713348">Hire me</a>
          </div>
        </div>
      </section>
   
      
   
        <section className="about" id="about">
            <div className="max-width">
            <h2 className="title">About Me</h2>
                <div className="about-content">
                    <div className="column left">
                    <img src="https://moewalls.com/wp-content/uploads/2021/08/obito-kamui-thumb.jpg" alt="profile"/>
                    </div>
                    <div className="column right">
                    <div className="text">Hi, I'm Akshit and I'm <span className="typing-2"></span></div>
                    <p>Web developer with in-depth experience in UI/UX design. In a nutshell, I create websites that help organizations address business challenges and meet their needs.</p>
                    <br/>
                    <div className="text">
                        Why Collaborate with Me
                    </div>
                    <p>I manage everything from website navigation and layout to a company’s web hosting and security architecture. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS.</p>

                    <a  href="https://akshit-cv.vercel.app/" target="blank">Download CV</a>
                    </div>
                </div>
            </div>
        </section>

    <section className="services" id="Services">
    <div className="max-width">
      <h2 className="title">
        My area of expertise
      </h2>
      <div className="serv-content">
        <div className="card">
          <div className="box">
            <i className="fas fa-laptop-code"></i>
            <div className="text">Web Design</div>
            <p className="servicesText"> I have a strong foundation in web design, combining artistic flair with technical proficiency to create captivating and engaging websites. </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <i className="fas fa-user-secret"></i>
            <div className="text">Software</div>
            <p className="servicesText">I have a deep understanding of web technologies such as HTML5,CSS3,and JavaScript frameworks like React.js and Express.Additionally I have hands on experience with databases(firebase and NoSQL) API integrations, version control systems (Git), and deployment platforms (such as Netlify and Heroku).</p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <i className="fas fa-code"></i>
            <div className="text">Programming</div>
            <p className="servicesText">I am an excellent programmer that has a love for developing innovative and simple to use software solutions. I'm proficient in Python programming, which is one of my technological strengths.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
   

  
  <section className="skills" id="skills">
    <div className="max-width">
      <h2 className="title">My Skills</h2>
      <div className="skills-content">
        <div className="column left">

          <br/>
          <div className="text">PROJECT</div>

          <ul>

            <li className="project">Airbnb Clone</li>

            <li className="project">Database Management App</li>

            <li className="project">Portfolio (HTML, CSS, js, Bootstraps ,React ,Next)</li>
            <li className="project">Daily-Journals website (HTML, CSS, Javascript, Python, SQL)</li>
            <li className="project">weather-app (HTML, CSS, Bootstraps,React)</li>
            <li className="project">Keeper-app (HTML, CSS, Bootstraps Ejs)</li>
            <li className="project">Portfolio(HTML, CSS, Bootstraps)</li>
            

            <li className="project">Currently Working on </li>
          </ul>

          <br/>
          <div className="text">ONLINE TEST CONDUCTING PLATFORM</div>

          <p>
            I am knowledgeable in and regularly work in the areas of Programming, Web Application  Ui/Ux development back-end management.
          </p>
          <a href="make change" target="blank">Learn more...</a>
        </div>
        <div className="column right">
          
         
          <div className="bars">
            <div className="info">
              <span>Python</span>

            </div>
            <div className="line css"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>Web Application 
              </span>

            </div>
            <div className="line js"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>HTML/CSS/JavaScript/React/Next/
              </span>

            </div>
            <div className="line bootstraps"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>
              Bootstraps/jquery/Express
              </span>

            </div>
            <div className="line bootstraps"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>Mongoose /firebase</span>

            </div>
            <div className="line django"></div>
          </div>
          <div className="bars">
            <div className="info">
              <span>VS-Code /Github</span>

            </div>
            <div className="line django"></div>
          </div>
        </div>
      </div>
    </div>
  </section>


    
      <section className="projects" id="projects">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?e-commerce"} alt="img"/>
                <div className="text">
                  Airbnd Clone (HavenHub)
                </div>
                <h5>key features</h5>
                <p className="myproject-details">User Registration and Authentication</p>
                <p className="myproject-details">Search and Filtering</p>
                <p className="myproject-details">Property Listings</p>
                <p className="myproject-details">Booking and Reservation Management</p>
                <p className="myproject-details">Admin Dashboard</p>
            
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?weather"} alt="weather"/>
                <div className="text">
                Weather-Application
                </div>
                <h5>key features</h5>
                <p className="myproject-details">Location-based Weather Data</p>
                <p className="myproject-details">User Interface and Design</p>
                <p className="myproject-details">Search Functionality</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?blog"} alt="img"/>
                <div className="text">Portfolio</div>
                <p>#Project Details:My portfolio web page, where I showcase my abilities and work. Made using HTML, CSS, and Javascript React Next js.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?messanger"} alt="img"/>
                <div className="text">Blog</div>
                <h5>key features</h5>
                <p className="myproject-details">My personal blog and educational website where I share what I've learnt.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?notes"} alt="img"/>
                <div className="text">To-do-Application</div>
                <h5>key features</h5>
                <p className="myproject-details">Task Creation and Management</p>
                <p className="myproject-details">Notes and Attachments:</p>
                <p className="myproject-details">Reminders and Notifications</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?app-clone"} alt="img"/>
                <div className="text">Coming Soon</div>
                <h5>key features</h5>
                <p className="myproject-details">Project Details:-Online test Conducting -Application
                  ....
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={"https://source.unsplash.com/720x600/?code,demo"} alt="img"/>
                <div className="text">Coming Soon
                </div>
                <p className="myproject-details">#Project Details: Coming Soon
                  ....
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Get in Touch</div>
                <p>Contact me at any time. Any fresh projects, original concepts, or chances to contribute to your ideas are always welcome to be discussed. Any queries or inquiries, please email me. You can schedule a meeting with me, and I'll be pleased to answer your questions.</p>
                <div className="icons">

                  <a href="https://instagram.com/aistscience">
                    <div className="row">
                      <i className="fa-solid fa-user-large"></i>
                      <div className="info">
                        <div className="head">Name</div>
                        <div className="sub-title"><a href="https://aistechx.com/" style={{textDecoration:"none",color: "#fff"}}> Akshit Dhakad</a></div>
                      </div>
                    </div>
                  </a>

                  <div className="row">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="info">
                      <div className="head">&nbsp;Address</div>
                      <div className="sub-title">&nbsp;Bhopal , India</div>
                    </div>
                  </div>

                  <div className="row">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title"><a href="mailto:akshitdhakad7400@gmail.com" style={{textDecoration:"none",color: "#fff"}}>akshitdhakad7400@gmail.com</a></div>
                    </div>
                  </div>

                  <div className="row">
                    <i className="bi bi-translate"></i>
                    <div className="info">
                      <div className="head">Language Known</div>
                      <div className="sub-title">Hindi, English</div>
                    </div>
                  </div>

                  <br/>

                  {/* <!-- Social --> */}
                  <div className="social-menu">
                    <ul>
                      <li><a href="https://github.com/akshitDhakad"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg></a></li>
                      <li><a href="https://www.linkedin.com/in/akshit-dhakad-758a27250/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg></a></li>
                      
                      <li><a href="https://leetcode.com/akshitdhakad7400/" title="Learn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
</svg></a></li>
                      <li><a href="https://codesandbox.io/dashboard/recent?workspace=786d91f1-e4cc-4766-889c-a03684dce1ae" title="Learn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
      </svg></a></li>
                      <li><a href="https://codesandbox.io/dashboard/recent?workspace=786d91f1-e4cc-4766-889c-a03684dce1ae" title="Learn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
      </svg></a></li>
                      <li><a href="https://api.whatsapp.com/send?phone=918871713348" title="Learn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg></a></li>
                      
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Reach --> */}
              <div id="message" className="column right">
                <div className="text">Message me</div>
                <form action="mailto:akshitdhakad7400@mgail.com">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="Your Email" required/>
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Subject" required/>
                  </div>
                  <div className="field textarea">
                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                  </div>
                  <div className="button-area">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
   
    <footer>
    <span>
      <a href="https://www.linkedin.com/in/akshit-dhakad-758a27250/"> Akshit Dhakad </a> | <span className="far fa-copyright"></span> 2023 All Rights Reserved. Privacy Policy
    </span>
  </footer>
</div>
    
  )
}

export default Main
