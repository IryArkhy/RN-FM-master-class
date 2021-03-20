#LISTS

In Native development you you should never use a map() to display an array of items due to performance reasons. The mobile phone will render every single thing that's on the screen. If you have an array of 100 items, it will try to render all of them AND it will try to re-render all of them whenever the component tree renders regardlesss of whether the data have changed.