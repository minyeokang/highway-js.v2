import Highway from '@dogstudio/highway';
import { gsap } from "gsap";

const bg = document.querySelector('.bg')
class Fade extends Highway.Transition {
    in({ from, to, trigger, done }) {

      gsap.fromTo(bg, {top: '-100%'},{top: '0', opacity: 1, duration:0.5, onComplete: function(){
        gsap.to(bg, 0.5,{top:'-100%'})
        from.remove() //for not overlapping. remove old view 
        done() //always call done = transition finished.
      }})
        
    }
  
    out({ from, trigger, done }) {
      //in order to have same animation back and forth
      gsap.to(from, {opacity: 0, onComplete: function(){
        done()
      }})
    }
}


export default Fade
