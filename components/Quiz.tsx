import React, { useEffect, useState } from "react";

// <Quiz>  .....  </Quiz>

export function Quiz({ shuffle = false, children }) {
  const [shuffleOptions, setShuffleOptions] = useState(false);
  const [myChildren, setMyChildren] = useState(null);

  useEffect(() => {
    if (shuffle !== shuffleOptions) {
      setShuffleOptions(shuffle);
    }

    setMyChildren(
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { shuffle: shuffleOptions });
        }
        return child;
      })
    );
  }, [shuffle, children]);

  return (
    <>
      {myChildren} <button>Submit</button>
    </>
  );
}
