import firebaseConfig from "../firebase";

const ref = firebaseConfig.firestore().collection("book");
// console.log(ref);

function getBooks() {
  ref.onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    // setBooks(items);
    console.log(items);
    return items;
  });
}

/**
 *
 * @param name: name
 * @param count: count
 * @returns {*}
 */
function getBookRecommendList(name, count) {
  return;
}

export { getBooks, getBookRecommendList };
