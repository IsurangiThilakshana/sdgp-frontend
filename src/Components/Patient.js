import React, { Component } from 'react'


 class Patient extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              doctname: '',
              cmp1: '',
              cmp2: '',
              cmp3: '',
              cmp4: '',
              cmp5: '',
              cmp6: '',
              cmp7: '',
              cmp8: '',
              cmp9: '',
              cmp10: '',
              cmp11: '',
              cmp12: '',
              cmp13: '',
              cmp14: '',
              cmp15: '',
              cmp16: '',
              cmp17: '',
              cmp18: '',
              cmp19: '',
              cmp20: '',
              cmp21: ''
         }
     }

     handlePatientnameChange = (event) =>{
        this.setState({
            doctname: event.target.value
        })
     }

     handleCmp1Change = (event1) =>{
         this.setState({
             cmp1 : event1.target.value
         })
     }

     handleCmp2Change = (event2) =>{
        this.setState({
            cmp2 : event2.target.value
        })
    }

    handleCmp3Change = (event3) =>{
        this.setState({
            cmp3 : event3.target.value
        })
    }

    handleCmp4Change = (event4) =>{
        this.setState({
            cmp4 : event4.target.value
        })
    }

    handleCmp5Change = (event5) =>{
        this.setState({
            cmp5 : event5.target.value
        })
    }

    handleCmp6Change = (event6) =>{
        this.setState({
            cmp6 : event6.target.value
        })
    }

    handleCmp7Change = (event7) =>{
        this.setState({
            cmp7 : event7.target.value
        })
    }

    handleCmp8Change = (event8) =>{
        this.setState({
            cmp8 : event8.target.value
        })
    }

    handleCmp9Change = (event9) =>{
        this.setState({
            cmp9 : event9.target.value
        })
    }

    handleCmp10Change = (event10) =>{
        this.setState({
            cmp10 : event10.target.value
        })
    }

    handleCmp11Change = (event11) =>{
        this.setState({
            cmp11 : event11.target.value
        })
    }

    handleCmp12Change = (event12) =>{
        this.setState({
            cmp12 : event12.target.value
        })
    }

    handleCmp13Change = (event13) =>{
        this.setState({
            cmp13 : event13.target.value
        })
    }

    handleCmp14Change = (event14) =>{
        this.setState({
            cmp14 : event14.target.value
        })
    }

    handleCmp15Change = (event15) =>{
        this.setState({
            cmp15 : event15.target.value
        })
    }

    handleCmp16Change = (event16) =>{
        this.setState({
            cmp16 : event16.target.value
        })
    }

    handleCmp17Change = (event17) =>{
        this.setState({
            cmp17: event17.target.value
        })
    }

    handleCmp18Change = (event18) =>{
        this.setState({
            cmp18 : event18.target.value
        })
    }

    handleCmp19Change = (event19) =>{
        this.setState({
            cmp19 : event19.target.value
        })
    }

    handleCmp20Change = (event20) =>{
        this.setState({
            cmp20 : event20.target.value
        })
    }

    handleCmp21Change = (event21) =>{
        this.setState({
            cmp21 : event21.target.value
        })
    }
     
    render() {
        return (
        <form action="" name="patient" class="form">
            <div>
                <h1> Prediction Form </h1> <br/>
               <label for="patientname">Patient's name:</label><br/>
			   <input type="text" value={this.state.patientname} name="patient" placeholder="Enter Patient's name"
                onChange={this.handlePatientnameChange}/><br/><hr/>
			   <p><i>We will never share your information with anyone!</i></p>
               
               <label for="cmp1">EOSINOPHILS:</label><br/>
			   <input type="text" value = {this.state.cmp1} name="cmp1" placeholder="EOSINOPHILS" 
               onChange= {this.handleCmp1Change}/><br/><br/>
			
			   <label for="cmp2">EOSINOPHILS:</label><br/>
			   <input type="text" value = {this.state.cmp2} name="cmp2" placeholder="EOSINOPHILS"
               onChange= {this.handleCmp2Change}/><br/><br/>

               <label for="cmp3">Hb:</label><br/>
                <input type="text" value = {this.state.cmp3} name="cmp3" placeholder="Hb"
                onChange= {this.handleCmp3Change}/><br/><br/>
                
                <label for="cmp4">LYMPHOCYTES:</label><br/>
                <input type="text" value = {this.state.cmp4} name="cmp4" placeholder="LYMPHOCYTES"
                onChange= {this.handleCmp4Change}/><br/><br/>
                
                <label for="cmp5">LYMPHOCYTES:</label><br/>
                <input type="text" value = {this.state.cmp5} name="cmp5" placeholder="LYMPHOCYTES"
                onChange= {this.handleCmp5Change}/><br/><br/>
                
                <label for="cmp6">MCH:</label><br/>
                <input type="text" value = {this.state.cmp6} name="cmp6" placeholder="MCH"
                onChange= {this.handleCmp6Change}/><br/><br/>
                
                <label for="cmp7">MCHC:</label><br/>
                <input type="text" value = {this.state.cmp7} name="cmp7" placeholder="MCHC"
                onChange= {this.handleCmp7Change}/><br/><br/>
                
                <label for="cmp8">MONOCYTES:</label><br/>
                <input type="text" value = {this.state.cmp8} name="cmp8" placeholder="MONOCYTES"
                onChange= {this.handleCmp8Change}/><br/><br/>
                
                <label for="cmp9">MONOCYTES:</label><br/>
                <input type="text" value = {this.state.cmp9} name="cmp9" placeholder="MONOCYTES"
                onChange= {this.handleCmp9Change}/><br/><br/>
                
                <label for="cmp10">NEUTROPHILS:</label><br/>
                <input type="text" value = {this.state.cmp10} name="cmp10" placeholder="NEUTROPHILS"
                onChange= {this.handleCmp10Change}/><br/><br/>

                <label for="cmp11">NEUTROPHILS:</label><br/>
                <input type="text" value = {this.state.cmp11} name="cmp11" placeholder="NEUTROPHILS"
                onChange= {this.handleCmp11Change}/><br/><br/>
                
                <label for="cmp12">PCV:</label><br/>
                <input type="text" value = {this.state.cmp12} name="cmp12" placeholder="PCV"
                onChange= {this.handleCmp12Change}/><br/><br/>

                <label for="cmp13">PLATELET COUNT:</label><br/>
                <input type="text" value = {this.state.cmp13} name="cmp13" placeholder="PLATELET COUNT"
                onChange= {this.handleCmp13Change}/><br/><br/>
                
                <label for="cmp14">RBC:</label><br/>
                <input type="text" value = {this.state.cmp14} name="cmp14" placeholder="RBC"
                onChange= {this.handleCmp14Change}/><br/><br/>

                <label for="cmp15">WBC:</label><br/>
                <input type="text" value = {this.state.cmp15} name="cmp15" placeholder="WBC"
                onChange= {this.handleCmp15Change}/><br/><br/>
                
                <label for="cmp16">RDW (CV):</label><br/>
                <input type="text" value = {this.state.cmp16} name="cmp16" placeholder="RDW (CV)"
                onChange= {this.handleCmp16Change}/><br/><br/>

                <label for="cmp17">BASOPHILS:</label><br/>
                <input type="text" value = {this.state.cmp17} name="cmp17" placeholder="BASOPHILS"
                onChange= {this.handleCmp17Change}/><br/><br/>
                
                <label for="cmp18">BASOPHILS:</label><br/>
                <input type="text" value = {this.state.cmp18} name="cmp18" placeholder="BASOPHILS"
                onChange= {this.handleCmp18Change}/><br/><br/>

                <label for="cmp19">ABNORMAL CELLS:</label><br/>
                <input type="text" value = {this.state.cmp19} name="cmp19" placeholder="ABNORMAL CELLS"
                onChange= {this.handleCmp19Change}/><br/><br/>

                <label for="cmp20">NRBC:</label><br/>
                <input type="text" value = {this.state.cmp20} name="cmp20" placeholder="NRBC"
                onChange= {this.handleCmp20Change}/><br/><br/>
				
				<label for="cmp21">BLASTS:</label><br/>
                <input type="text" value = {this.state.cmp21} name="cmp21" placeholder="BLASTS"
                onChange= {this.handleCmp21Change}/><br/><br/>
               
            </div>
        </form>    
        )
    }
}

export default Patient




