import React, { Component } from 'react'
import './style.css';

 class Doctor extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              doctname: '',
              EOSINOPHILS1: '',
              EOSINOPHILS2: '',
              Hb: '',
              LYMPHOCYTES1: '',
              LYMPHOCYTES2: '',
              MCH: '',
              MCHC: '',
              MONOCYTES: '',
              MONOCYTES: '',
              NEUTROPHILS1: '',
              NEUTROPHILS2: '',
              PCV: '',
              PLATELETCOUNT: '',
              RBC: '',
              WBC: '',
              RDW: '',
              BASOPHILS1: '',
              BASOPHILS2: '',
              ABNORMALCELLS: '',
              EOSINOPHILS0: '',
              EOSINOPHILS1: ''
         }
     }

     handleDoctnameChange = (event) =>{
        this.setState({
            doctname: event.target.value
        })
     }

     handleEOSINOPHILS1Change = (event) =>{
         this.setState({
            EOSINOPHILS1 : event.target.value
         })
     }

     handleEOSINOPHILS2Change = (event) =>{
        this.setState({
            EOSINOPHILS2 : event.target.value
        })
    }

    handleHbChange = (event) =>{
        this.setState({
            Hb : event.target.value
        })
    }

    handleLYMPHOCYTES1Change = (event) =>{
        this.setState({
            LYMPHOCYTES1 : event.target.value
        })
    }

    handleLYMPHOCYTES2Change = (event) =>{
        this.setState({
            LYMPHOCYTES2 : event.target.value
        })
    }

    handleMCHChange = (event) =>{
        this.setState({
            MCH : event.target.value
        })
    }

    handleMCHCChange = (event) =>{
        this.setState({
            MCHC : event.target.value
        })
    }

    handleMONOCYTES1Change = (event) =>{
        this.setState({
            MONOCYTES1 : event.target.value
        })
    }

    handleMONOCYTES2Change = (event) =>{
        this.setState({
            MONOCYTES2 : event.target.value
        })
    }

    handleNEUTROPHILS1Change = (event) =>{
        this.setState({
            NEUTROPHILS1 : event.target.value
        })
    }

    handleNEUTROPHILS2Change = (event) =>{
        this.setState({
            NEUTROPHILS2 : event.target.value
        })
    }

    handlePCVChange = (event) =>{
        this.setState({
            PCV : event.target.value
        })
    }

    handlePLATELETCOUNTChange = (event) =>{
        this.setState({
            PLATELETCOUNT : event.target.value
        })
    }

    handleRBCChange = (event) =>{
        this.setState({
            RBC : event.target.value
        })
    }

    handleWBCChange = (event) =>{
        this.setState({
            WBC : event.target.value
        })
    }

    handleRDWChange = (event) =>{
        this.setState({
            RDW : event.target.value
        })
    }

    handleBASOPHILS1Change = (event) =>{
        this.setState({
            BASOPHILS1: event.target.value
        })
    }

    handleBASOPHILS2Change = (event) =>{
        this.setState({
            BASOPHILS2 : event.target.value
        })
    }

    handleABNORMALCELLSChange = (event) =>{
        this.setState({
            ABNORMALCELLS : event.target.value
        })
    }

    handleNRBCChange = (event) =>{
        this.setState({
            NRBC : event.target.value
        })
    }

    handleBLASTSChange = (event) =>{
        this.setState({
            BLASTS : event.target.value
        })
    }
     
    render() {
        return (
        <form onSubmit = {this.handleSubmit} action="" name="doctor" class="form">
            <div >
                <h1 className={'doctitle'}> Prediction Form </h1> <br/>
               <label for="doctorname">Doctor's name:</label><br/>
			   <input type="text" value={this.state.doctname} name="doctname" placeholder="Enter doctor's name"
                onChange={this.handleDoctnameChange}/><br/><hr/>
			   <p><i>We will never share your information with anyone!</i></p>
               
               <label for="EOSINOPHILS1">EOSINOPHILS:</label><br/>
			   <input type="text" value = {this.state.EOSINOPHILS1} name="EOSINOPHILS1" placeholder="EOSINOPHILS" 
               onChange= {this.handleEOSINOPHILS1Change}/><br/><br/>
			
			   <label for="EOSINOPHILS">EOSINOPHILS:</label><br/>
			   <input type="text" value = {this.state.EOSINOPHILS} name="EOSINOPHILS2" placeholder="EOSINOPHILS"
               onChange= {this.handleEOSINOPHILS2Change}/><br/><br/>

               <label for="Hb">Hb:</label><br/>
                <input type="text" value = {this.state.Hb} name="Hb" placeholder="Hb"
                onChange= {this.handleHbChange}/><br/><br/>
                
                <label for="LYMPHOCYTES1">LYMPHOCYTES:</label><br/>
                <input type="text" value = {this.state.LYMPHOCYTES1} name="LYMPHOCYTES1" placeholder="LYMPHOCYTES"
                onChange= {this.handleLYMPHOCYTES1Change}/><br/><br/>
                
                <label for="LYMPHOCYTES2">LYMPHOCYTES:</label><br/>
                <input type="text" value = {this.state.LYMPHOCYTES2} name="LYMPHOCYTES2" placeholder="LYMPHOCYTES"
                onChange= {this.handleLYMPHOCYTES2Change}/><br/><br/>
                
                <label for="MCH">MCH:</label><br/>
                <input type="text" value = {this.state.MCH} name="MCH" placeholder="MCH"
                onChange= {this.handleMCHChange}/><br/><br/>
                
                <label for="MCHC">MCHC:</label><br/>
                <input type="text" value = {this.state.MCHC} name="MCHC" placeholder="MCHC"
                onChange= {this.handleMCHCChange}/><br/><br/>
                
                <label for="MONOCYTES1">MONOCYTES:</label><br/>
                <input type="text" value = {this.state.MONOCYTES1} name="MONOCYTES1" placeholder="MONOCYTES"
                onChange= {this.handleMONOCYTES1Change}/><br/><br/>
                
                <label for="MONOCYTES2">MONOCYTES:</label><br/>
                <input type="text" value = {this.state.MONOCYTES2} name="MONOCYTES2" placeholder="MONOCYTES"
                onChange= {this.handleMONOCYTES2Change}/><br/><br/>
                
                <label for="NEUTROPHILS1">NEUTROPHILS:</label><br/>
                <input type="text" value = {this.state.NEUTROPHILS1} name="NEUTROPHILS1" placeholder="NEUTROPHILS"
                onChange= {this.handleNEUTROPHILS1Change}/><br/><br/>

                <label for="NEUTROPHILS2">NEUTROPHILS:</label><br/>
                <input type="text" value = {this.state.NEUTROPHILS2} name="NEUTROPHILS2" placeholder="NEUTROPHILS"
                onChange= {this.handleNEUTROPHILS2Change}/><br/><br/>
                
                <label for="PCV">PCV:</label><br/>
                <input type="text" value = {this.state.PCV} name="PCV" placeholder="PCV"
                onChange= {this.handlePCVChange}/><br/><br/>

                <label for="PLATELETCOUNT">PLATELET COUNT:</label><br/>
                <input type="text" value = {this.state.PLATELETCOUNT} name="PLATELETCOUNT" placeholder="PLATELET COUNT"
                onChange= {this.handlePLATELETCOUNTChange}/><br/><br/>
                
                <label for="RBC">RBC:</label><br/>
                <input type="text" value = {this.state.RBC} name="RBC" placeholder="RBC"
                onChange= {this.handleRBCChange}/><br/><br/>

                <label for="WBC">WBC:</label><br/>
                <input type="text" value = {this.state.WBC} name="WBC" placeholder="WBC"
                onChange= {this.handleWBCChange}/><br/><br/>
                
                <label for="RDW">RDW (CV):</label><br/>
                <input type="text" value = {this.state.RDW} name="RDW" placeholder="RDW (CV)"
                onChange= {this.handleRDWChange}/><br/><br/>

                <label for="BASOPHILS1">BASOPHILS:</label><br/>
                <input type="text" value = {this.state.BASOPHILS1} name="BASOPHILS1" placeholder="BASOPHILS"
                onChange= {this.handleBASOPHILS1Change}/><br/><br/>
                
                <label for="BASOPHILS2">BASOPHILS:</label><br/>
                <input type="text" value = {this.state.BASOPHILS2} name="BASOPHILS2" placeholder="BASOPHILS"
                onChange= {this.handleBASOPHILS2Change}/><br/><br/>

                <label for="ABNORMALCELLS">ABNORMAL CELLS:</label><br/>
                <input type="text" value = {this.state.ABNORMALCELLS} name="ABNORMALCELLS" placeholder="ABNORMAL CELLS"
                onChange= {this.handleABNORMALCELLSChange}/><br/><br/>

                <label for="NRBC">NRBC:</label><br/>
                <input type="text" value = {this.state.NRBC} name="NRBC" placeholder="NRBC"
                onChange= {this.handleNRBCChange}/><br/><br/>
				
				<label for="BLASTS">BLASTS:</label><br/>
                <input type="text" value = {this.state.BLASTS} name="BLASTS" placeholder="BLASTS"
                onChange= {this.handleBLASTS1Change}/><br/><br/>
               
            </div>

            <div class="btncenter">
				<button class="btn" type="submit" form="doctor" value="Submit">Predict</button> <br/><br/>
				{/* <button class="btn" form="doctor" value="Submit"><a href="E:\form\patient.html" target="_blank">Patient Form</a></button> */}
			</div>

        </form>    
        )
    }
}

export default Doctor

