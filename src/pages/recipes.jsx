import React, {useState, Component} from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./pages.css";
import "./recipes.css"

import { render } from 'react-dom';

let currentRecipe = <>hello vro</>;

function ReturnToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
    let mybutton = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

class RecipeButton extends Component {
    constructor(props) {
        super(props);

        this.img = this.props.img;
        this.name = this.props.name;
        this.func = this.props.func;
    }

    render() {
        return <div className="recipebutton" style={{backgroundImage: "url(/src/assets/recipes/"+this.img+".png)"}}>
                    <button onClick={() => this.func(this.name)} 
                        className="recipebuttonimage">
                    <p style={{margin:"auto"}}>{this.name}</p>
                    </button>
            </div>
    }
}

const Recipes = () => {
    const [currentRecipe, switchRecipe] = useState("nonepizzaleftbeef");
    window.onscroll = function() {scrollFunction()};
    return (
    <AnimatedPage>
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            fontSize:"30px",
        }}
        >
        <h1 className="centerheader" style={{fontFamily:'Papyrus', fontSize:"10vh"}}>Hello Vro 💙</h1>
        <div style={{margin:"auto", alignItems:"center"}}>
            <RecipeButton name={"Baked Mac & Cheese"} func={switchRecipe} img={"mac/3"}/>
            <RecipeButton name={"Tiramisu"}           func={switchRecipe} img={"tiramisu/4"}/>
            <RecipeButton name={"Bread"}              func={switchRecipe} img={"bread/1"}/>
            <RecipeButton name={"Spaghetti"}          func={switchRecipe} img={"spaghetti/1"}/>
            <RecipeButton name={"Breakfast Tacos"}    func={switchRecipe} img={"breaktacos/1"}/>
            <RecipeButton name={"Pancakes"}           func={switchRecipe} img={"pancakes/1"}/>
        </div>
        </div>
        {DisplayRecipe(currentRecipe)}
        <button id="topBtn" onClick={() => ReturnToTop()}>Back to Top</button>
        <div className='bottomDiv'/>
    </AnimatedPage>
  );
};

const DisplayRecipe = (recipe) => {
    var currR = <></>;

    switch(recipe) {
        default:                   currR = <></>;             break;
        case "yo gurt":            currR = <p>Yo Gurt!</p>;   break;
        case "Baked Mac & Cheese": currR = <RecipeMac/>;      break;
        case "Tiramisu":           currR = <RecipeTiramisu/>; break;
        case "Bread": 
        case "Spaghetti": 
        case "Breakfast Tacos":
        case "Pancakes":  
    }

    return(
        <div className="recipecontainer">
            {currR}
        </div>
    );
}

export default Recipes;

class RecipeMac extends Component {
    render() {
    return (
<div>
    <div style={{textAlign: "center"}}>
        <h2>pepper belly pete's baked mac and cheese</h2>
        <a href="https://www.instagram.com/reel/DM9DwIWpmuU/?igsh=bms5NzYxdDdxcjZy">source</a><br/><br/>
        <img className="recipeimg" src="/src/assets/recipes/mac/3.png"/>
    </div>
    <ul>
<li>feeds 8 comfortably</li>
<li>note: this uses a LOT of cheese. I did not use the full 16oz when listed, and for the layering I put just enough to cover the pasta</li>
<li>obviously you can substitute with whatever cheese you'd like</li>
<h2>Ingredients:</h2>
<li>macaroni/pasta of choice (i used ~36oz)</li>
<li>4 tbsp butter</li>
<li>4 tbsp all purpose flour</li>
<li>1 tsp smoked paprika</li>
<li>1 tsp cayenne pepper</li>
<li>¼ cup grated onion (I substituted for ~2tbsp onion powder, do what ya want)</li>
<li>1 tbsp garlic paste</li>
<li>2 cups heavy cream</li>
<li>2 cups milk</li>
<li>12oz evaporated milk</li>
(I replaced the heavy cream/milk/evaporated milk with 4 cups milk and it was fine)
<li>16 oz American cheese</li>
<li>16 oz cheddar cheese</li>
<li>~12oz Monterrey Jack</li>
<li>~12oz mozzarella</li>
(dude i said it was a lot of cheese you don't have to get THIS much)
<li>1 tbsp Worcestershire sauce</li>
<li>box of cheeze its (for topping? i didn't do this lol)</li>
<h2>Recipe:</h2>
<li>start boiling your salted water, add in your pasta when it's ready, be checking on it while you cook the rest of this</li>
<li>mix and cook butter/flour in a pan for 3 min (till raw flour gone and is brown paste basically)</li>
<li>mix in paprika (make sure the kitchen is ventilated lol), cayenne, onion, and garlic paste</li>
<li>while stirring, add in cream/milk/evaporated milk (or just the extra milk if you're like me)</li>
<li>add in american cheese, then cheddar</li>
<li>add in the al dente pasta which you've definitely finished by now right 😁</li>
</ul><img className="recipeimg" src="/src/assets/recipes/mac/1.png"/><ul>
<li>add in Worcestershire</li>
(you may have to transfer pasta and sauce to a pot first if it's too big)
<br/><br/>
<li>add half of the pasta/sauce mixture to baking pan, then a Monterrey Jack layer</li>
<li>add other half, then mozzarella layer</li>
(there was so much that I used two baking pans and it filled up both to the brim! you will probably need to as well)
</ul><img className="recipeimg" src="/src/assets/recipes/mac/2.png"/><ul>
<li>crushed cheeze its on top (again, i didn't do this)</li>
<li>bake for 35 min on 350 deg</li>
    </ul>
</div>
    );
  }
}

class RecipeTiramisu extends Component {
    render() {
    return (
<div>
    <div style={{textAlign: "center"}}>
        <h2>sally's tiramisu</h2>
        <a href="https://sallysbakingaddiction.com/tiramisu/">source</a><br/><br/>
        <img className="recipeimg" src="/src/assets/recipes/tiramisu/4.png"/>
    </div>
    <ul>
<li>feeds like 12 if everyone takes hearty portions</li>
<li>contrary to the recipe, i like to make the cream first, then dip the ladyfingers and
    assemble the whole tiramisu at the end, that way a layer of soggy ladyfingers
    isn't sitting around for 20 minutes</li>
<li>note: to mix/whisk things in this recipe, you need a hand mixer. YOU. <b>NEED.</b> A. HAND. MIXER.
if you don't have one it will turn out runny and soggy and pathetic. trust me, i'd know ☹️</li>
</ul><h2>Ingredients:</h2><ul>
<li>16oz marscapone</li>
<li>2tbsp dark rum (alcoholic ver.) / milk (non-alcoholic ver.)</li>
<li>4 large eggs</li>
<li>½ cup sugar</li>
<li>2 cups heavy cream</li>
<li>½ tsp vanilla extract</li>
<li>⅛ tsp salt</li>
<li>1 cup espresso</li>
(this can be done w/ 4 tbsp of instant espresso and 1 cup of hot water)
<li>5 tbsp grand mariner (alcoholic ver.) / 0 tbsp NOTHING (non-alcoholic ver.)</li>
<li>40-45 ladyfingers</li>
(i buy two packs of the Vicenzovo ladyfingers for 48 total and i dip the unused ones in my leftovers at the end 😋)
<li>dutch processed cocoa powder (unsweetend natural works too)</li>
</ul><h2>Recipe:</h2><ul>
<li>mix together mascarpone and rum/milk (tbh i forgot the milk most times and it was fine, ymmv)</li>
<li>since you are likely my friend you probably do not own a double boiler so here is what you're going to do:
<ul>
    <li>get a pot (shallow preferably) and a pan/bowl <i>wider</i> than the pot out</li>
    <li>fill the pot with hot water to the point where if you put the pan/bowl on top the
        <i> water doesn't touch the bottom of the pan/bowl</i></li>
    <li>start simmering the water in the pot on medium-low heat and put the pan/bowl on top</li>
</ul>
congrats, double boiler!
</li>
<li>separate your yolks and egg whites; yolks into double boiler, whites into a bowl</li>
the easiest way for me to separate them is to crack the eggshell into two halves and move the
yolk between them over the bowl of whites. whites should fall off the egg during this process, and you can
use one of the egg shells to scrape off any loose ones
<li>with yolks in the double boiler, add in <i>half</i> the sugar (¼ cup) and whisk
(you can do this one by hand) them together until they're light and foamy, ~5 min</li>
<li>beat into marscapone mixture on medium until combined</li>
<li>put heavy cream and vanilla extract in a bowl, beat on medium-high till medium peaks form, ~3 min</li>
peaks have to do with how the cream tips looks on the mixer if you stop beating and take it out.
they should have just a bit of firmness, not super droopy
<li>fold the whipped cream into the marscapone</li>
<li>clean your whisks off, then add salt to the egg white bowl and beat on medium-high till foamy (1 min)</li>
<li>increase to high, pour in remaining sugar, beat until stiff peaks (4-5 min)</li>
<li>fold into mascarpone</li>
<li>start dipping each side of the ladyfingers into the espresso and laying them in your baking pan
    <ul>
        <li>just a quick dip is necessary, if you dip too long they'll get too soggy</li>
        <li>they probably won't fit perfectly, but you can bend them a little once they're doused or cut some in half to fill space</li>
    </ul>
</li>
<img className="recipeimg" src="/src/assets/recipes/tiramisu/1.png"/>
<li>use a spatula to spread about half the mascarpone mix over the ladyfingers in a layer</li>
<img className="recipeimg" src="/src/assets/recipes/tiramisu/2.png"/>
<li>use a strainer to strain cocoa powder in a thin layer over the cream</li>
<img className="recipeimg" src="/src/assets/recipes/tiramisu/3.png"/>
<li>repeat with dipping and laying the ladyfingers, then laying the mascarpone layer, then straining the cocoa layer</li>
<li>chill in da fridge for at least 8 hours</li>
</ul>
</div>
    );
  }
}