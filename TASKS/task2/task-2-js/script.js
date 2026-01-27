window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */

    //const paragraphs = document.querySelectorAll('p');
    //console.log(paragraphs);

    /***OUTPUT:
     * 
     */

    //NodeList(9)[p#1, p#2.img - descript, p#3.img - descript, p#4.img - descript, p#5.img - descript, p#6.img - descript, p#7.img - descript, p#8.img - descript, p#9.img - descript ]


    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */

    //const firstParagraph = document.querySelectorAll('p')[0];
    //console.log(firstParagraph);

    /***OUTPUT:
     * 
     */

    /*<p id="1">*/

    /*************************************** */
    /* 3: all elements with the class inner-container */

    /***CODE */

    //const innerContainers = document.querySelectorAll('.inner-container');
    //console.log(innerContainers);

    /***OUTPUT:
     */

    //NodeList(8)[div.inner - container, div.inner - container, div.inner - container, div.inner - container, div.inner - container, div.inner - container, div.inner - container, div.inner - container]


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */

    /***CODE */

    //const Images = document.querySelectorAll('.img-container img');
    //console.log(Images);

    //const lastImage = document.querySelectorAll('.img-container img')[7];
    //console.log(lastImage);

    /***OUTPUT:
     * 
     */

    /* < img class="img-image" src = "task-2-images/seventeen.png" > */


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */

    //All h2
    //const headings = document.querySelectorAll('h2');
    //console.log(headings);

    //Length of h2 list
    //const headings = document.querySelectorAll('h2');
    //console.log(headings.length);

    //Select text content
    //const headings = document.querySelectorAll('h2');
    //const firstHeadingText = headings[0]
    //console.log(firstHeadingText);

    /***OUTPUT:
     * 
     */

    //All h2
    //NodeList [ h2 ]

    //Length of h2 list
    // 1

    //Select text content
    // < h2 >


    /*************************************** */
    /* 6: the element with id name parent */

    /***CODE */

    //const parentElement = document.querySelector('#parent');
    //console.log(parentElement);

    /***OUTPUT:
     * 
     */

    //< section id = "parent" >

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */

    //document.querySelector('p').textContent = 'Benjamin Merhi, January 24th, 2025.'


    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE */

    //const contents = document.querySelectorAll('.content-container');
    //if (contents[0]) contents[0].style.background = 'orange';
    //if (contents[1]) contents[1].style.background = 'purple';


    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */

    //const firstImg = document.querySelector('img');
    //if (firstImg) firstImg.src = 'task-2-images/seven.png';


    /*************************************** */
    /* 4: Select the third paragraph element on the page and
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE */

    //document.querySelectorAll('p')[2].innerHTML = '<h2>TEST 123</h2>';

    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and
    add to the existing content an h2 element containing the text `TEST 123`
    /***CODE */

    //const fourthP = document.querySelectorAll('p')[3];
    //if (fourthP) fourthP.insertAdjacentHTML('beforeend', '<h2>TEST 123</h2>');


    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE */

    /*const fifthP = document.querySelectorAll('p')[4];
    if (fifthP) {
        fifthP.insertAdjacentHTML('beforeend', '<img src="task-2-images/one.png" alt="one" />');
        fifthP.classList.add('newStyle');
    }*/


    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */

    /*let colors = ['red', 'blue', 'green', 'orange'];
    const innerContainers = document.querySelectorAll('.inner-container');

    colors.forEach((color, i) => {
        if (innerContainers[i]) innerContainers[i].style.background = color;
    });*/


    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(),
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */

    //1
    /*const allPTagsThree = document.querySelectorAll('p');
    console.log(allPTagsThree);

    //2
    function customCreateElement(parent) {
        const newP = document.createElement('p');
        newP.textContent = 'using create Element';
        newP.style.background = 'green';
        newP.style.color = 'white';
        parent.appendChild(newP);
    }

    allPTagsThree.forEach(customCreateElement);*/






    /***EXPLANATION::
     * 
     * 
     */

    //All 'p' elements are selected with querySelectorAll and new elements are created, in the function: function customCreateElement(parent), and appended to them with parent.appendChild(). The new elements contain the text "using create Element" with a green background and white text color.








    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv.
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)).
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense...
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */

    /*function customNewBoxCreate(parent) {
        const div = document.createElement('div');
        div.classList.add('testDiv');
        parent.appendChild(div);
        return div;
    }

    const gridParent = document.getElementById('new-grid');
    const rows = 10;
    const cols = 10;
    const cellSize = 45;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const returnedDiv = customNewBoxCreate(gridParent);
            returnedDiv.style.left = (col * cellSize) + 'px';
            returnedDiv.style.top = (row * cellSize) + 'px';
            if (row % 2 === 0) {
                returnedDiv.style.background = 'white';
            } else {
                returnedDiv.style.background = 'cornflowerblue';
            }
        }
    }

    const allTestDivs = document.querySelectorAll('.testDiv');
    console.log('Number of testDiv elements:', allTestDivs.length);


    /***EXPLANATION::
     * 
     * 
     */

    //There is 100 testDiv elements logged in the console because the loop makes 10 rows by 10 columns, so there is 100 appended divs

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ...
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder),
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red,
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder
        when dividing by three. */

    /***CODE */
    /*const gridParentThree = document.getElementById('new-grid-three');

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const returnedDiv = customNewBoxCreate(gridParentThree);

            returnedDiv.style.left = (col * cellSize) + 'px';
            returnedDiv.style.top = (row * cellSize) + 'px';

            const remainder = col % 3;
            if (remainder === 0) returnedDiv.style.background = 'red';
            if (remainder === 1) returnedDiv.style.background = 'orange';
            if (remainder === 2) returnedDiv.style.background = 'yellow';
            returnedDiv.textContent = remainder;
        }
    }


    /***EXPLANATION::
     * 
     * 
     */

    //I am unsure if there is anything in specific that I have to explain, so I will just be explaining the code as a whole.
    //So there is a new grid created which is a 10x10 grid of div elements, from a loop, each with a specific background color and text content based on their column position. The colour and number of each div is determined by the column's remainder when the number is divided and grouped into threes, with the % or modulo operator.

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}
