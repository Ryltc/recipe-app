export const colors = {
	COLOR_PRIMARY: "#ed6e3a",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
	COLOR_CATBUTT: "#ed6e3a"
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Breakfast",
	},
	{
		id: "02",
		category: "Lunch",
	},
	{
		id: "03",
		category: "Dinner",
	},
	{
		id: "04",
		category: "Asian",
	},
	{
		id: "05",
		category: "Italian",
	},
	{
		id: "06",
		category: "Desserts",
	},
	{
		id: "07",
		category: "Vegetarian",
	},
	{
		id: "08",
		category: "Seafood",
	},
	{
		id: "09",
		category: "Haitian",
	},
	{
		id: "10",
		category: "Latin-American",
	},
];

export const spiceList = [
	{
		id: "01",
		name: "Epis",
		image: require("../assets/images/episabove.png"),
		rating: "5.0",
		ingredients: [
			"1 Red Bell Pepper",
			"1 Green Bell Pepper",
			"2 Yellow Onion",
			"Full Sprig of Cilantro",
			"Full Sprig of Parsley",
			"3-4 Heads of Garlic",
			"1 Scotch Bonnet or Habinero Pepper",
			"1 Tablespoon of Adobo",
			"1-2 Tablespoons of Olive Oil",
			"1/4 cup of water"],
		time: "10 minutes",
		difficulty: "Easy",
		description: "A seasoning staple of Haitian cuisine.",
		steps: [
			"Cut everything into managable pieces to fit together in a tall blender.",
			"Blend until a everything is mixed together.",
			"Pour into airtight container and store in the refrigerator until needed.",
		],
	},
	{
		id: "02",
		name: "Lorem Ipsum 1",
		//image: require("../assets/images/epis.png"),
		rating: "5.0",
		ingredients: [
			"1 Red Bell Pepper",
			"1 Green Bell Pepper",
			"2 Yellow Onion",
			"Full Sprig of Cilantro",
			"Full Sprig of Parsley",
			"3-4 Heads of Garlic",
			"1 Scotch Bonnet or Habinero Pepper",
			"1 Tablespoon of Adobo",
			"1-2 Tablespoons of Olive Oil",
			"1/4 cup of water"],
		time: "10 minutes",
		difficulty: "Easy",
		description: "A seasoning staple of Haitian cuisine.",
		steps: [
			"Cut everything into managable pieces to fit together in a tall blender.",
			"Blend until a everything is mixed together.",
			"Pour into airtight container and store in the refrigerator until needed.",
		],
	},
	{
		id: "03",
		name: "Lorem Ipsum 2",
		//image: require("../assets/images/epis.png"),
		rating: "5.0",
		ingredients: [
			"1 Red Bell Pepper",
			"1 Green Bell Pepper",
			"2 Yellow Onion",
			"Full Sprig of Cilantro",
			"Full Sprig of Parsley",
			"3-4 Heads of Garlic",
			"1 Scotch Bonnet or Habinero Pepper",
			"1 Tablespoon of Adobo",
			"1-2 Tablespoons of Olive Oil",
			"1/4 cup of water"],
		time: "10 minutes",
		difficulty: "Easy",
		description: "A seasoning staple of Haitian cuisine.",
		steps: [
			"Cut everything into managable pieces to fit together in a tall blender.",
			"Blend until a everything is mixed together.",
			"Pour into airtight container and store in the refrigerator until needed.",
		],
	},
];

export const sauceList = [
	{
		id: "01",
		name: "Pini Cheese",
		image: require("../assets/images/pini-cheese.jpg"),
		rating: "5.0",
		ingredients: [
			"8oz Cream Cheese",
			"8oz Blue Cheese",
			"4oz Softened Unsalted Butter",
			"1 Tsp of Dijon Mustard",
			"Dash of Worcestor Sauce",
			"Dash of Tobasco Sauce",
			"1/3 Greenn Olives (w/peppers okay)",
			"1 TSP of chopped Chives or Parsley",
			"1-2 Tablespoons of Olive Oil",
			"1/4 cup of water"],
		time: "10 minutes",
		difficulty: "Easy",
		description: "Cheese dip that goes great with celery or crackers. *Chef Recommendation: Maztos Crackers*",
		steps: [
			"Make sure ingredients are at room temperature so mixing is easier",
			"If using stand mixer, start adding cheese and butter in slowly",
			"Add the rest of the ingredients and mix",
			"Can be eaten immediately, but letting sit for a couple days lets the flavors set in better"
		],
	},
	{
		id: "02",
		name: "Mock Chicken Sauce",
		//image: require("../assets/images/pinicheese.png"),
		rating: "5.0",
		ingredients: [
			"1/4 cup of honey",
			"2 tablespoons of yellow mustard",
			"1/4 cup of barbecue sauce",
			"1 tablespoon of lemon juice",
			"1/2 cup of mayonnause or aoili"],
		time: "5 minutes",
		difficulty: "Easy",
		description: "Easy mock chicken sauce *homophobia free!*",
		steps: [
			"Mix all ingredients and let sit in refrigerator for atleast an hour",
		],
	},
	{
		id: "03",
		name: "Mock Hottie Sauce",
		//image: require("../assets/images/pinicheese.png"),
		rating: "5.0",
		ingredients: [
			"1/2 cuo of water",
			"1 teaspoon of cornstarch",
			"2/3 cup of granulated sugar",
			"1/3 cup of Frank's RedHot Cayanne Pepper sauce",
			"1/3 cup of light corn syrup",
			"1/4 cup of honey",
			"1 and a 1/4 teaspoons of ground Aleppo pepper",
			"1 tablespoon plus one teaspoon of apple cider vinegar"],
		time: "5 minutes",
		difficulty: "Easy",
		description: "Mock Hottie sauce, you know the one",
		steps: [
			"Mix cornstarch and water in a small saucepan",
			"Add everything but apple cider vinegar",
			"Bring to boil on medium",
			"Reduce and simmer for 5 minutes to let thicken",
			"Remove from head and add vinegar",
			"Cover and cool"
		],
	},
];

export const ingredientImages = {
	"tuna-tartare": {
	  "Fresh Tuna Steak": require("../assets/images/ingredients/tuna-tartare/1-Fresh-Tuna-Steak.png"),
      "Lime Juice": require("../assets/images/ingredients/tuna-tartare/2-Lime-Juice.jpg"),
      "Red Onion": require("../assets/images/ingredients/tuna-tartare/3-Red-Onion.jpg"),
      "Avocado": require("../assets/images/ingredients/tuna-tartare/4-Avocado.jpg"),
  	},
  };

export const recipeIngredients = {
	"tuna-tartare": {
	  "1-Fresh-Tuna-Steak": require("../assets/images/ingredients/tuna-tartare/1-Fresh-Tuna-Steak.png"),
	  "2-Lime-Juice": require("../assets/images/ingredients/tuna-tartare/2-Lime-Juice.jpg"),
	  "3-Red-Onion": require("../assets/images/ingredients/tuna-tartare/3-Red-Onion.jpg"),
	  "4-Avocado": require("../assets/images/ingredients/tuna-tartare/4-Avocado.jpg"),
	},
  };


export const recipeList = [
	{
		id: "01",
		name: "Holiday Ham",
		folder: "holiday-ham",
		image: require("../assets/images/ham-postcook.jpg"),
		rating: "5.0",
		ingredients: ["Ham-Butt/Shank", "Pineapple-Slices", "Cloves", "Honey", "Kero Syrup", "Brown-Sugar", "DrPepper"],
		time: "6-12 Hours",
		difficulty: "Medium",
		calories: "A lot of cal",
		color: "#006A4E",
		description:
			"Looking to add a unique touch to your holiday table? This holiday ham is the showstopper you've been searching for! This mouthwatering recipe combines classic holiday ingredients with a surprising twist. As it slow-cooks, your home will be filled with the incredible aroma of the festivities to come.",
		steps: [
			"Place ham shank in roasting pan",
			"Cut off and set excess fat in pan",
			"Score ham and place cloves about 3-4 inches from eachother",
			"Use toothpicks to place and hold pineapple slices",
			"Drizzle kero syrup, brown sugar, honey, and lastly the Dr. Pepper.",
			"Place in oven at 200˚Farenheit for 6 to 12 hours",
			"Turn oven off and remove ham",
			"Cut manageable sized pieces of meat off the bone, then remove bone entirely, and put meat back in the pan",
			"Put pan back into the oven while oven cools. The ham will soak up the juices and stay warm for serving",
		],
		meta:
			"Elevate your holiday feast with an irresistible glazed ham recipe! Slow-cooked to perfection with a blend of ham shoulder, pineapple, cloves, honey, kero syrup, and a secret ingredient - Dr Pepper. Unveil a symphony of flavors as your house fills with the enticing aroma of this extraordinary ham. Discover a new holiday tradition with our easy-to-follow recipe that cooks for 6 to 10 hours at 200°F. Your guests won't believe their taste buds!",
		conclusion:
			"So get ready to impress your guests with a holiday ham like no other! Make this recipe your new tradition and savor the joy of the season with every incredible bite."
	},
	{
		id: "02",
		name: "Lasagna",
		image: require("../assets/images/lasgana.png"),
		rating: "3.6",
		ingredients: [
			"Lasagna Noodles",
			"Ground Beef",
			"Ricotta Cheese",
			"Tomato Sauce",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	{
		id: "03",
		name: "Hot Dog",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
	{
		id: "04",
		name: "Manchurian",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "05",
		name: "Chicken",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		ingredients: ["Chicken Breasts", "Salt", "Black Pepper", "Olive Oil"],
		time: "45 mins",
		difficulty: "Medium",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"A succulent chicken dish seasoned with a blend of salt and black pepper, then cooked to perfection with a drizzle of olive oil.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Season the chicken breasts with salt and black pepper.",
			"Heat olive oil in a skillet over medium-high heat.",
			"Sear the chicken breasts on both sides until golden brown.",
			"Transfer the chicken to the oven and bake until cooked through.",
			"Serve hot and enjoy your flavorful chicken!",
		],
	},
	{
		id: "06",
		name: "Cupcakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
		time: "60 mins",
		difficulty: "Medium",
		calories: "200 cal",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Prepare the cupcake batter by mixing the ingredients together.",
			"Line a muffin tin with cupcake liners.",
			"Fill each liner with batter and bake in the oven.",
			"Let the cupcakes cool, then frost and decorate as desired.",
			"Indulge in these sweet treats and savor the flavor!",
		],
	},
	{
		id: "07",
		name: "Curry",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		ingredients: ["Meat", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 mins",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the meat with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the meat is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "08",
		name: "Ramen",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
	},
	{
		id: "09",
		name: "Tuna Tartar",
		image: require("../assets/images/tuna.png"),
		rating: "5.0",
		ingredients: [
			"Tuna Steak",
			"Green Onions",
			"Sesame Seeds",
			"Fresh minced Ginger",
			"Soy Sauce",
			"Lime Juice",
			"Sesame Oil",
		],
		time: "10 minutes",
		difficulty: "Easy",
		description: "A seasoning staple of Haitian cuisine.",
		steps: [
			"Cut tuna against the grain into 1/2 inch cubes and place in bowl.",
			"In a separate bowl, mix sesame oil, lime juice, ginger, and soy sauce toget her",
			"After mixed well, add sauce mixture into the tuna bowl, and mix until absorbed",
			"Ready to serve into portions",
		],
	},
];