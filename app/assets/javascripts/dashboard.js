$.ajax({
  url: "http://localhost:3001/apps",
  headers: {
    Authorization: "Token token=dacb9f7b92c77a922f9c878ac63abc4c"
  }
}).done(function( data ) {
  console.log( data );
});
