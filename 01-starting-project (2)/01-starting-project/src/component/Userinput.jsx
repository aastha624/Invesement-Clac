//  here first export component function-- and id add using css folder and take id name
 export default function Userinput(){
return <section id ="user-input">
<div classname="input-group">
<p>
    <label>Initial Investment</label>
    <input type="number" required/>
</p>
<p>
    <label>Annual Investment</label>
    <input type="number" required/>
</p>
</div>
<div classname="input-group">
<p>
    <label>Expected Return</label>
    <input type="number" required/>
</p>
<p>
    <label>Duration</label>
    <input type="number" required/>
</p>
</div>
</section>
 }