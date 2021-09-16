const about =document.querySelector('#about');
const contact =document.querySelector('#contact');
const projects =document.querySelector('#projects');
const projectsProjects =document.querySelector('#projects-projects');
const aboutContact =document.querySelector('#about-content');
const contactContent =document.querySelector('#contact-content');






about.addEventListener('click',()=>{
  const aboutBox=new WinBox({
    title:"About Me",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount:aboutContact,
    onfocus:function(){
      this.setBackground('#00aa00')
    },
    onblur:function(){
      this.setBackground('#777')
    }

  })
})



contact.addEventListener('click',()=>{
  const contactBox=new WinBox({
    title:"Contact Me",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount:contactContent,
    onfocus:function(){
      this.setBackground('#00aa00')
    },
    onblur:function(){
      this.setBackground('#777')
    }

  })
})



projects.addEventListener('click',()=>{
  const projectBox=new WinBox({
    title:"projects",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount:projectsProjects,
    onfocus:function(){
      this.setBackground('#00aa00')
    },
    onblur:function(){
      this.setBackground('#777')
    }

  })
})