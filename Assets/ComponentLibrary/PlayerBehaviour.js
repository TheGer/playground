#pragma strict
var kbinputx:boolean;
var kbinputy:boolean;
var mouseinput:boolean;
var speed:int;
var movelikecar:boolean;

var objectToShoot:Rigidbody;
var canshoot:boolean;



function OnTriggerEnter(otherObject:Collider)
{
	
	//trigger
	Debug.Log("hit trigger");
}


function OnCollisionEnter(collision:Collision)
{

	//physics
	Debug.Log("hit collision");
}

function shootObjectEverySecond()
{
	canshoot=false;
	Instantiate(objectToShoot,transform.position,transform.rotation);
	yield WaitForSeconds(1);
	canshoot=true;
}


function keyboardInputY()
{
	transform.Translate(Vector3.up * speed * Time.deltaTime * Input.GetAxis("Vertical"));
}


function keyboardInputX()
{
	if(movelikecar){
	transform.Rotate(Vector3.back * speed*6 * Time.deltaTime * Input.GetAxis("Horizontal"));
	}else {
	transform.Translate(Vector3.right * speed * Time.deltaTime * Input.GetAxis("Horizontal"));
	}
}
//created a static variable to store the score
static var score:int;

//create labels in the top left corner of the screen
function OnGUI()
{
	GUI.color = Color.white;
	GUI.Label(Rect(2,3,100,50),"Score:> "+score);
}


//reset score every time the game starts
function Start () {
	score = 0;
	
	
	
}

function Update () {

	if (kbinputx)
	{
		keyboardInputX();
	}
	
	if (kbinputy)
	{
		keyboardInputY();
	}
	
	if ((objectToShoot != null) && Input.GetKey("space"))
	{
		if (canshoot) {
		shootObjectEverySecond();
		}
	}
	
}