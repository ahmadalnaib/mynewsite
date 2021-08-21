const about =document.querySelector('#about');
const contact =document.querySelector('#contact');
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