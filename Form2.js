class Form2{
    constructor(){
        
        this.input = createInput("");
        this.greeting = createElement('h2');
        this.title = createElement('h1');
        this.Name = createElement('h4');
        this.Address = createElement('h4');
       this.PhoneNumber = createElement('h4');
       this.next=createButton("Let's Start")
        this.input2 = createInput("");
        this.input3 = createInput("");
    }
    hide(){
      this.input.hide();
      this.Name.hide()
      this.Address.hide()
     this.PhoneNumber.hide()
     this.next.hide()
      this.input2.hide() 
      this.input3.hide()
    }
    display(){
      this.input.position(displayWidth/2 - 215,   displayHeight/6+125);

        this.title.html("Silicon Valley");
        this.title.position(displayWidth/2 - 50, 0);

        this.Name.html("Name:");
        this.Name.position(displayWidth/2 - 300, displayHeight/6+100);
    
  
       this.Address.html("Address:");
       this.Address.position(displayWidth/2 - 300,   displayHeight/6+150);
    
    
        this.PhoneNumber.html("Phone Number:");
        this.PhoneNumber.position(displayWidth/2 - 300,   displayHeight/6+200);

  
    this.input2.position(displayWidth/2 - 215,   displayHeight/6+175)
   this.input3.position(displayWidth/2 - 155,   displayHeight/6+225)
    
 this.next.position(displayWidth/2-200,displayHeight/2);
    
          this.greeting.html("Welcome to the Silicon Valley")
          this.greeting.position(displayWidth/2 - 120, displayHeight/6);

          this.next.mousePressed(()=>{
            this.input.hide();
            this.Name.hide()
            this.Address.hide()
           this.PhoneNumber.hide()
           this.next.hide()
            this.input2.hide() 
            this.input3.hide();
      
      })
    }
    }