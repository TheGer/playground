#pragma strict



var speed:int;


function OnTriggerEnter(otherObject:Collider)
{

	//trigger
	//what happens when laser hits asteroid
	if (otherObject.gameObject.tag == "asteroid")
	{
		//increment the score
		PlayerBehaviour.score++;
		
		//destroy the asteroid
		Destroy(otherObject.gameObject);
		
	}
	
	
	
	//Debug.Log("hit");
}


function OnCollisionEnter(collision:Collision)
{

	//physics
	Debug.Log("hit");
}



function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function Start () {
	
}

function Update () {

	transform.Translate(Vector3.up * speed * Time.deltaTime);
	
}