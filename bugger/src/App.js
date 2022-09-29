import { React, useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddBug from './components/AddBugs/AddBug';
import CurrentBug from './components/CurrentBugs/CurrentBug';
// import SearchBar from "./components/SearchBar/SBar";
import './App.css';
import SearchBar from "./components/SearchBar/SBar";


function App() {

  const [addBug, setAddBug] = useState(true)
  const [assigned, setAssigned] = useState("");
	const [priority, setPriority] = useState("");
	const [description, setDescription] = useState("");
    const [data, setData] = useState([]);
    
    // const [toggleNew, setToggleNew] = useState(false);
    // const [toggleEdit, setToggleEdit] = useState(false);
    

    // const bugToggleNew = () => {
    //     {
    //         toggleNew ? setToggleNew(false) : setToggleNew(true);
    //     }
    // };

    const handleAssigned = (event) => {
        setAssigned(event.target.value);
    };
    const handlesetPriority = (event) => {
        setPriority(event.target.value);
    };
    const handlesetDescription = (event) => {
        setDescription(event.target.value);
    };


  const handleNew = (event) => {
    event.preventDefault();
    axios
        .post("https://lit-caverns-62565.herokuapp.com/create", {
            Assigned: assigned,
            Priority: priority,
            Description: description,
        })
        .then(() => {
            axios
                .get("https://lit-caverns-62565.herokuapp.com/")
                .then((response) => {
                    setData(response.data);
                });
        });
};


// const handleGet = (event) => {
//   event.preventDefault();
//   axios
//       .get("https://lit-caverns-62565.herokuapp.com/", {
//           Assigned: assigned,
//           Priority: priority,
//           Description: description,
//       })
//       .then(() => {
//           axios
//               .get("https://lit-caverns-62565.herokuapp.com/")
//               .then((response) => {
//                   setData(response.data);
//               });
//       });
// };


    useEffect(() => {
        axios.get("https://lit-caverns-62565.herokuapp.com//").then((response) => {
            setData(response.data);
        });
    }, []);



    // const handleUpdate = (bug) => {
    //     axios
		// 	.put(`https://lit-caverns-62565.herokuapp.com/update/${bug._id}`, {
		// 		Assigned: assigned ? assigned : bug.assigned,
		// 		Priority: priority ? priority : bug.priority,
		// 		Description: description ? description : bug.description,
		// 	})
		// 	.then(() => {
		// 		axios
		// 			.get("https://lit-caverns-62565.herokuapp.com/")
		// 			.then((response) => {
		// 				console.log(response);
		// 				setData(response.data);
		// 			});
		// 	});
    // };

    const handleDelete = (dataDelete) => {
        axios
			.delete(
				`https://lit-caverns-62565.herokuapp.com/delete/${dataDelete._id}`
			)
			.then(() => {
				axios
					.get("https://lit-caverns-62565.herokuapp.com/")
					.then((response) => {
						setData(response.data);
					});
			});
    };

    let toggleDisplayC = () => {
      if (addBug === true ) {
        setAddBug(!addBug);
      }
    }
  
    let toggleDisplayA = () => {
      if (addBug === false ) {
        setAddBug(!addBug);
      }
    }


  return (
    <div className='App'>

      <Header
      handleAssigned={handleAssigned}
      handleNew={handleNew}
      handlesetPriority={handlesetPriority}
      handlesetDescription={handlesetDescription}
      // bugToggleNew={bugToggleNew}
      // toggleNew={toggleNew}
      />


      <div className="maincontainer">{addBug 
      ? 
      <AddBug handlesetDescription={handlesetDescription}
      handleNew={handleNew}
      handleAssigned={handleAssigned}
      handlesetPriority={handlesetPriority}
      /> 
      : 
      <CurrentBug
      handleDelete={handleDelete}
      data={data}

      // bugs={bugs}
      />}
      </div>


      <div>
        <button name="curappbtn" onClick={() => toggleDisplayC()} className=" curappbtn appbtn btn btn-outline-light"> Current Bugs </button>
        
        <button name="addappbtn" onClick={() => toggleDisplayA()} className=" addappbtn appbtn btn btn-outline-warning"> Report Bugs </button>
      </div>
      <SearchBar/>
      <Footer/>
        
    </div>
  );
}

export default App;