import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import chart from './undraw_Data_points_re_vkpq.svg'
import graphic1 from './undraw_data_processing_yrrv.svg'
import './App.css';
const FileDownload = require('js-file-download');

function App() {

  const [currentTime, setCurrentTime] = useState(0);
  const [message, setMessage] = useState("");
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

    setMessage("Your report is being generated, Please Wait....");

    formData.append('file', selectedFile);

		fetch(
			'http://127.0.0.1:5000/generate_report',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.blob())
			.then((result) => {
        FileDownload(result, "my_report.html");
        // FileDownload(response.data, 'report.csv');
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    // setMessage("Done Thanks for using Insight Generator");
	};
	


  const getTime = () =>{
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }

  useEffect(() => {
    getTime();
  }, [])

  return (
    <div className="App">
    <div className="Menu-bar">
    <div id="home-name" > Insight-Generator </div>
      <nav id="main-menu">
          <ul class="nav-bar">
                <li class="nav-button-home"><a href="#">Home</a></li>
                <li class="nav-button-services"><a href="#">Services</a></li>
                <li class="nav-button-products"><a href="#">About</a></li>
          </ul>
      </nav>    
    </div>
    
    <div className="Chart-container">
      <img src={chart} className="Chart" alt="logo" />
    </div>
   
    <div className="Main-content">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> Current Time is {currentTime} </p> */}
        
        <div id="Description-text">
          {/* <p>WORLDS BEST ANALYTICS TOOL</p> */}
          <h3> Understand Your Data <br/> Like Never Before </h3>
          <p className="Description">
            Insight-Generator is world's first patform to <br/> get Insights of any csv file withim seconds.   
          </p>
        </div>


        <div className="Converter-container">
          <p> Attach Your CSV File Here ... </p>
          <input type="file" name="file" onChange={changeHandler} className="" />
          {isSelected ? (
            <div>
              {/* <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p> */}
            </div>
          ) : (
            // <p>Select a file to show details</p>
            <p></p>
          )}
          <div className="Div-button" onClick={handleSubmission}>
            <div className="Button-center" >Get Report</div>
          </div>
          {/* <div> 
            <div>{message}</div>
          </div> */}
      </div>
      {/* <br/>
      <br/>
      <div>
          <img src={graphic1} className="Graphic1" alt="logo" />
      </div> */}

      </div>

    </div>
  );
}

export default App;
