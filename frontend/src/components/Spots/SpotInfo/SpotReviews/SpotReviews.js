import React from "react";
import DeleteReview from "../../../Reviews/ManageReviews/DeleteReview/index";
import OpenModalMenuItem from "../../../Navigation/OpenModalMenuItem";
import { useEffect, useRef, useState } from "react";
import './SpotReview.css'
const SpotReview = ({ spot, newReviewList, userReview, userId }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  if (!newReviewList) {
    return null;
  }
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };


  const sortedReviews = newReviewList.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <>
      <ul className="spot-review-list">
        {sortedReviews.map((review) => (
          <li key={review.id} className="spot-review-item">
            <div className="spot-review-name">{review.User?.firstName}</div>
            <div className="spot-review-date">
              {getFormattedDate(review.createdAt)}
            </div>
            <div className="spot-review-description">{review.review}</div>

            {userReview && userId && review.userId === userId && (
              <div className="spot-review-modal">
                <OpenModalMenuItem
                  buttonText="Delete"
                  onItemClick={closeMenu}
                  modalComponent={<DeleteReview review={review} spot={spot} />}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
// // eslint-disable-next-line
//   const sortedReviews = newReviewList.sort((a, b) => {
//     return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
//   });

//   if (newReviewList.length === 1) {
//     return (
//       <>
//         <ul>
//           {newReviewList.length &&
//             newReviewList.map((review) => (
//               <li key={review.id}>
//                 <div>{review.User?.firstName}</div>
//                 {review.createdAt.split("-")[1] === "01" && (
//                   <div className="date">
//                     {" "}
//                     Jan {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "02" && (
//                   <div className="date">
//                     {" "}
//                     Feb {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "03" && (
//                   <div className="date">
//                     {" "}
//                     March {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "04" && (
//                   <div className="date">
//                     {" "}
//                     April {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "05" && (
//                   <div className="date">
//                     {" "}
//                     May {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "06" && (
//                   <div className="date">
//                     {" "}
//                     Jun {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "07" && (
//                   <div className="date">
//                     {" "}
//                     July {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "08" && (
//                   <div className="date">
//                     {" "}
//                     Aug {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "09" && (
//                   <div className="date">
//                     {" "}
//                     Sept {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "10" && (
//                   <div className="date">
//                     {" "}
//                     Sept {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "11" && (
//                   <div className="date">
//                     {" "}
//                     Nov {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "12" && (
//                   <div className="date">
//                     {" "}
//                     Dec {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 <div>{review.review}</div>
//                 {userReview && userId && review.userId === userId && (
//                   <div className="modal">
//                     <OpenModalMenuItem
//                       buttonText="Delete"
//                       onItemClick={closeMenu}
//                       modalComponent={
//                         <DeleteReview review={review} spot={spot} />
//                       }
//                     />
//                   </div>
//                 )}
//               </li>
//             ))}
//         </ul>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <ul>
//           {newReviewList.length &&
//             newReviewList.map((review) => (
//               <li key={review.id}>
//                 <div>{review.User?.firstName}</div>
//                 {review.createdAt.split("-")[1] === "01" && (
//                   <div className="date">
//                     {" "}
//                     Jan {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "02" && (
//                   <div className="date">
//                     {" "}
//                     Feb {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "03" && (
//                   <div className="date">
//                     {" "}
//                     March {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "04" && (
//                   <div className="date">
//                     {" "}
//                     April {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "05" && (
//                   <div className="date">
//                     {" "}
//                     May {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "06" && (
//                   <div className="date">
//                     {" "}
//                     Jun {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "07" && (
//                   <div className="date">
//                     {" "}
//                     July {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "08" && (
//                   <div className="date">
//                     {" "}
//                     Aug {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "09" && (
//                   <div className="date">
//                     {" "}
//                     Sept {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "10" && (
//                   <div className="date">
//                     {" "}
//                     Sept {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "11" && (
//                   <div className="date">
//                     {" "}
//                     Nov {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 {review.createdAt.split("-")[1] === "12" && (
//                   <div className="date">
//                     {" "}
//                     Dec {review.createdAt.split("-")[0]}
//                   </div>
//                 )}
//                 <div>{review.review}</div>

//                 {userReview && userId && review.userId === userId && (
//                   <div className="modal">
//                     <OpenModalMenuItem
//                       buttonText="Delete"
//                       onItemClick={closeMenu}
//                       modalComponent={
//                         <DeleteReview review={review} spot={spot} />
//                       }
//                     />
//                   </div>
//                 )}
//               </li>
//             ))}
//         </ul>
//       </>
//     );
//   }
// };
export default SpotReview;
