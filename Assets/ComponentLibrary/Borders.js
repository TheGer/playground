#pragma strict

function Update()
{
	var leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	var rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;

	var topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	var bottommost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).y;

	
	if (transform.position.x < leftmost)
	{
		transform.position.x = rightmost;
	}
	if (transform.position.x > rightmost)
	{
		transform.position.x = leftmost;
	}
	if (transform.position.y < bottommost)
	{
		transform.position.y = topmost;
	}
	if (transform.position.y > topmost)
	{
		transform.position.y = bottommost;
	}
	
	
	
}
