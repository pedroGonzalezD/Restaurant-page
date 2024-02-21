const main = document.getElementById("content")

export const menu = () =>{
    main.innerHTML = `<section>
    <h2>MENU</h2>
    <div>
        <h3>PIZZA</h3>
        <h4>Margherita <span>10$</span></h4>
        <p>this pizza topping is quite simple, only contains a spread of tomato sauce, mozzarella cheese, and chopped basil leaves.</p>
        <h4>Neapolitan <span>12$</span></h4>
        <p>The topping only contains small fish or anchovies, mozzarella cheese and tomatoes.</p>
        <h4>marinara <span>14$</span></h4>
        One of the traditional neapolitan versions of pizza. Both use anchovies as a topping. But the mariana does not use tomatoes, but instead replaces it with farlic, and oregano.
    </div>
    <div>
        <h3>PASTA</h3>
        <h4>Spaghetti <span>9$</span></h4>
        <p>Basically the shape is the same as straight lengthwise, but the size of the spaghetti is slightly different.</p>
        <h4>Linguine <span>11$</span></h4>
        <p>means "little tongue", it is winder and flatter than spaguetti.</p>
    </div>
    <div>
        <h3>DRINK</h3>
        <h4>Granita <span>8$</span></h4>
        This drink in the form of slushee ice and textured similar to shabed ice is made by blending ice and other ingredients.
        
    </div>
    
</section>`
}