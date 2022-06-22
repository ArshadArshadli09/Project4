// search start

const searchIcon = document.querySelector("#search")
const box = document.querySelector(".header-wrapper-search")



searchIcon.addEventListener("click", () => {
  if (searchIcon.getAttribute("class") == "fa-solid fa-magnifying-glass") {
    searchIcon.setAttribute("class", "fa-solid fa-xmark")
    box.classList.add("back")
  }
  else {
    searchIcon.setAttribute("class", "fa-solid fa-magnifying-glass")
    box.classList.remove("back")
  }
})


// search end



// bars menu start
const asideMenu = document.querySelector(".bars-menu")
const bars = document.querySelector("#bars")
const button = document.querySelector(".sticky-logo-bar")
const buttonSecond = document.querySelector(".header-wrapper-menu-bottom-network-bars")
const icon = document.querySelector("#icon")
button.addEventListener("click", () => {

  asideMenu.classList.toggle("show")
  asideMenu.classList.toggle("pos-fix")
  bars.classList.toggle("x-mark")
})
buttonSecond.addEventListener("click", () => {
  // if(icon.getAttribute(("class")== "fa-solid fa-ellipsis-vertical")){
  //   icon.setAttribute("class","fa-solid fa-xmark")
  //   buttonSecond.classList.toggle("icon")
  // }
  buttonSecond.classList.toggle("icon")

  asideMenu.classList.toggle("show")
  asideMenu.classList.toggle("pos-fix")
})

// bars menu end

//    scroll start
const menu = document.querySelector(".header-wrapper-menu-bottom")
const fixed = document.querySelector(".header-wrapper-scroll")

window.addEventListener("scroll", () => {
  if (scrollY > 180) {
    menu.classList.add("sticky")
    fixed.classList.add("up")
  }
  else {
    menu.classList.remove("sticky")
    fixed.classList.remove("up")
  }
})

// scroll end


// count start

let counts = setInterval(updated, 10)
let to = 0
let width = 0
function updated() {
  const count = document.querySelector(".about-us-container-content-graphic-software-span-number")
  const graphic = document.querySelector(".about-us-container-content-graphic-software-devop")
  ++to
  count.innerHTML = 1 + to + "%";
  graphic.style.width = to + "%";
  if (to == 92) {
    clearInterval(counts)
    count.innerHTML = "92 %";
  }


}


let cyb = 0
let cyberNumberCounts = setInterval(cyberUpdated, 10)
function cyberUpdated() {
  const cyberNumber = document.querySelector('#eighty')
  const cyber = document.querySelector(".about-us-container-content-graphic-software-cyber")
  ++cyb
  cyberNumber.innerHTML = 1 + cyb + "%";
  cyber.style.width = cyb + "%";
  if (cyb == 80) {
    clearInterval(cyberNumberCounts);
    cyberNumber.innerHTML = "80 %";
  }
}

let artific = 0
let artificalNumberCounts = setInterval(artificalUpdated, 10)
function artificalUpdated() {
  const artifNumber = document.querySelector('#ninety')
  const artif = document.querySelector(".about-us-container-content-graphic-software-artificial")
  ++artific
  artifNumber.innerHTML = 1 + artific + "%";
  artif.style.width = artific + "%";
  if (artific == 95) {
    clearInterval(artificalNumberCounts);
    artifNumber.innerHTML = "95 %";
  }
}
let web = 0
let webNumberCounts = setInterval(webUpdated, 10)
function webUpdated() {
  const webNumber = document.querySelector('#seventy')
  const webDevop = document.querySelector(".about-us-container-content-graphic-software-web")
  ++web
  webNumber.innerHTML = 1 + web + "%";
  webDevop.style.width = web + "%";
  if (web == 78) {
    clearInterval(webNumberCounts);
    webNumber.innerHTML = "78 %";
  }
}


// data
let clients = 0
let clientNumberCounts = setInterval(clientUpdated, 10)
function clientUpdated() {
  const clientNumber = document.querySelector('#clients')
  ++clients
  clientNumber.innerHTML = 1 + clients;
  if (clients == 80) {
    clearInterval(clientNumberCounts);
    clientNumber.innerHTML = "80 ";
  }
}
let companies = 0
let companyNumberCounts = setInterval(companyUpdated, 23)
function companyUpdated() {
  const companyNumber = document.querySelector('#companies')
  ++companies
  companyNumber.innerHTML = 1 + companies;
  if (companies == 50) {
    clearInterval(companyNumberCounts);
    companyNumber.innerHTML = "50 ";
  }
}
let projects = 0
let projectNumberCounts = setInterval(projectUpdated, 2)
function projectUpdated() {
  const projectNumber = document.querySelector('#project')
  ++projects
  projectNumber.innerHTML = 1 + projects;
  if (projects == 230) {
    clearInterval(projectNumberCounts);
    projectNumber.innerHTML = "230 ";
  }
}

// count end

// testimonal API

const testBox = document.querySelector("#testimonalApi")

const testimonalFetch = async () => {
  const testimonals = []
  const res = await axios.get("https://ersad-3339c-default-rtdb.firebaseio.com/testimonal.json")
  const data = await res.data
  for (let key in data) {
    testimonals.unshift(data[key])
  }
  return testimonals
}

testimonalFetch().then(res => {
  res.map(testimonal => {
    testBox.innerHTML += `
        
                 
        <div class="swiper-slide">
        <div class="testimonal-container-boxes-box">
         <div class="testimonal-container-boxes-box-image">
           <img src="assets/image/testimonal-img1.webp" />
         </div>
         <div class="testimonal-container-boxes-box-content">
           <p>
             ${testimonal.description}
           </p>
         </div>
         <div class="testimonal-container-boxes-box-id">
           <img src='${testimonal.image}'/>
           <h4>${testimonal.name}</h4>
           <p>${testimonal.title}</p>
         </div>
         </div>
         </div>     
        `
  })
}).catch(err => console.log(err))



// project API

const projectBox = document.querySelector("#projectApi")

const projectFetch = async () => {
  const projects = []
  const res = await axios.get("https://ersad-3339c-default-rtdb.firebaseio.com/projects.json")
  const data = await res.data
  for (let key in data) {
    projects.unshift(data[key])
  }
  return projects
}

projectFetch().then(res => {
  res.map(project => {
    projectBox.innerHTML += `
        
                 
        <div data-hash="slide1" class="swiper-slide">
        <div class="projects-container-boxes-box">
          <div class="projects-container-boxes-box-image">
            <a href=""><img src="${project.image}" alt=""/></a>
          </div>
          <div class="projects-container-boxes-box-content">
            <h4><a href="">${project.title}</a></h4>
            <p><a href="">${project.name}</a></p>
          </div>
        </div>
      </div>   
        `
  })
}).catch(err => console.log(err))

// blog API

const blogBox = document.querySelector("#blogApi")

const blogFetch = async () => {
  const blogs = []
  const res = await axios.get("https://ersad-3339c-default-rtdb.firebaseio.com/blog.json")
  const data = await res.data
  for (let key in data) {
    blogs.unshift(data[key])
  }
  return blogs
}

blogFetch().then(res => {
  res.map(blog => {
    blogBox.innerHTML += `
        
        <div class="swiper-slide">
        <div class="blog-container-boxes-box">
          <div class="blog-container-boxes-box-image">
            <img src="assets/image/blog-img1.webp" alt="" />
            <button>${blog.title}</button>
          </div>
          <div class="blog-container-boxes-box-content">
            <div class="blog-container-boxes-box-content-date">
              <span
                ><i class="fa-regular fa-calendar-check"></i> 16 Nov
                2020</span
              >
              <span><i class="fa-solid fa-user"></i> admin</span>
            </div>
            <h5>
              <a href="">${blog.name}</a>
            </h5>
            <p>
              ${blog.description}
            </p>
            <div class="blog-container-boxes-box-content-button">
              <button>
                Learn More <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
        `
  })
}).catch(err => console.log(err))


// team API

const teamBox = document.querySelector("#teamApi")

const teamFetch = async () => {
  const teams = []
  const res = await axios.get("https://ersad-3339c-default-rtdb.firebaseio.com/team.json")
  const data = await res.data
  for (let key in data) {
    teams.unshift(data[key])
  }
  return teams
}

teamFetch().then(res => {
  res.map(team => {
    teamBox.innerHTML += `
        
        <div class="team-page-container-boxes-box">
        <div class="team-page-container-boxes-box-image">
          <a href=""><img src="${team.image}" alt="" /></a>
        </div>
        <ul class="team-page-container-boxes-box-content">
          <li>
            <h4><a href="">${team.name}</a></h4>
          </li>
          <li><p>${team.title}</p></li>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </li>
        </ul>
      </div>
        `
  })
}).catch(err => console.log(err))






