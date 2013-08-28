// JavaScript Document
/*@Vikash Jha*/

/*

*/
	var canvas=document.getElementById("canvas1");
	var can=canvas.getContext('2d');
	can.font='Bold 20pt Prime';
	can.textAlign="center";
	can.fillStyle="red";
	can.fillText("Click on Start Button ",200,200,500);
	var sizeofbox=canvas.height/10;
	var ltr=true;
	var box_cordinate=new Array();
	var dice_coordinate=new Array();  //storing all box corridate
	var initial_pos=0; //dice initial position
	var count=0;
	function clearcanvas()
	{
	can.clearRect(0,0,canvas.width,canvas.height);	
	}
	
	//design the layout of Canvas
	function layoutdesign()
	{
		//10X10 matrix
			var row_beg=1;var row_end=10;
			var col_beg=1;var col_end=10;				
			var box1="#36FA4D";
			var box2="#3b5998"; 			
			var beg=0; var end=canvas.height-sizeofbox;   //end is total-height of canvas - boxsize.
			var col_num=1;
			for(var row=row_beg;row<=row_end;row++)
			{
				//if pointer is from left to right
				if(ltr)
				{
					beg=0;	
				}
				else
				{
						beg=canvas.width-sizeofbox;
				}
																				
				for(var col=col_beg;col<=col_end;col++)
				{
					if(col_num%2==0)
					{
							can.fillStyle=box1;	
					}
					else
					{
							can.fillStyle=box2;  
					}
				
					can.fillRect(beg,end,sizeofbox,sizeofbox);
					box_cordinate[col_num]=beg.toString()+','+end.toString(); //stores the beg,end coordinate
					can.font='10px Prime';

					can.fillStyle="white";
	
					can.fillText(col_num,beg+10,end+sizeofbox);
					if(ltr)
					{
						beg=beg+sizeofbox;	
					}
					else
					{
						beg=beg-sizeofbox;
					}
					
				col_num++;
				
				}
				end=end-sizeofbox;
				ltr=!ltr;		/*To fil From right to left */
				
			}
				
	}
	//Function to genearte a number from 1 to 6
		function dice(max)
		{
			var outcome=Math.floor(Math.random()*(max+1));
			if(outcome==0)
			{	
			outcome=1;
			}
			return outcome;
		}
		
	//To generate new Number for the next Move
	function next()
	{	if(count>0)
		{
			layoutdesign();
		}

		var new_outcome=dice(6);
		$("#diceoutcome").html(new_outcome);
		initial_pos=initial_pos+new_outcome;
		if(initial_pos>100)
		{
			initial_pos=initial_pos-new_outcome;
		}
		switch(initial_pos)
		{//ladder
		case 6:initial_pos=55;
		break;
		case 18:
				initial_pos=76;break;
		case 61:
				initial_pos=90;break;
		case 45:
				initial_pos=95;	break;
				
		//snake
		case 99: initial_pos=10;break;
		case 75: initial_pos=43;break;
		case 60: initial_pos=30;break;
		case 50: initial_pos=20;break;
		case 46: initial_pos=9;break;
		case 35: initial_pos=11;break;
		}
		$("#diceplacement").html(initial_pos);
		dice_coordinate=box_cordinate[initial_pos].split(',');
		can.fillStyle="red";
		can.fillStyle="border:2px solid thick";
		can.fillRect(dice_coordinate[0],dice_coordinate[1],sizeofbox,sizeofbox);		
		if(initial_pos==100)
		{
			alert("Congratulations You have won ");	
			location.reload();
		}		
		count++;
		
	}
	
	
	//change the color to its initial
	
	$(document).ready(function(e) {
		$("#diceoutcome").hide();
		$("#diceplacement").hide();
		$("#dicebox").hide();
		$("#reset").hide();        
		$("#start").click(function(){
			$("#start").hide();
			$("#next1").show();
			$("#reset").show();
			$("#part3").show();

			clearcanvas();
			layoutdesign();

			});		
    });
	
	$("#next1").click(function(){	
		next();
		$("#dicebox").show();
		$("#diceoutcome").show();
		$("#diceplacement").show();
		});
	$("#reset").click(function(){
			location.reload();
			
		});
	


