// on clicking generate resume btn generated resume should be previewed with a download option
let add_work_idx=2
function add_work() {
	let work_div = document.createElement('div').setAttribute('id','work_div_'+add_work_idx)
	add_work_idx++ 
	let job_heading_div = document.createElement('div').setAttribute('class','job_heading')
	let job_heading_number = document.createElement('h3').innerText='Job'+add_work_idx
	job_heading_div.appendChild(job_heading_number)
	let img_tag = document.createElement('img').setAttribute('src','../images/plus.png')
	let img_tag_p_tag = document.createElement('p').setAttribute('class','plus-btn')
	img_tag_p_tag.setAttribute('id','work_plus_btn')
	img_tag_p_tag.setAttribute('onclick','add_work()')
	img_tag_p_tag.appendChild(img_tag)
	let label = document.createElement('label').innerText='Start Date'
	job_heading_div.appendChild(job_heading_number)
	job_heading_div.appendChild(img_tag_p_tag)
	work_div.appendChild(job_heading_div)
	let parent_work_div = document.getElementById('work_div')
	parent_work_div.appendChild(work_div)
	let data_input = document.createElement('input')
}
function generate_portfolio(){
	// bio details
	let bio_data={}
	const full_name = document.getElementById('name')
	console.log(full_name.value)
	bio_data['name']=full_name.value
	// localStorage.setItem('name',full_name.value)

	// const image = document.getElementById('img')
	// console.log("image:",image.value)
	// bio_data['image']=image.value

	const address = document.getElementById('address')
	console.log(address.value)
	bio_data['address']=address.value
	// localStorage.setItem('address',address.value)

	const phone = document.getElementById('phone')
	console.log(phone.value)
	bio_data['phone']=phone.value
	// localStorage.setItem('phone',phone.value)

	const email = document.getElementById('email')
	console.log(email.value)
	bio_data['email']=email.value
	// localStorage.setItem('email',email.value)

	const about = document.getElementById('about')
	console.log(about.value)
	bio_data['about']=about.value
	// localStorage.setItem('about',about.value)

	const job_role = document.getElementById('job_role')
	console.log(job_role.value)
	bio_data['job_role']=job_role.value
	console.log(bio_data)

// education details
	let education_details={}
//bachelor's details 
	const bachelors_start = document.getElementById('bachelors_start')
	console.log(bachelors_start.value)
	education_details['bachelors_start']=bachelors_start.value

	const bachelors_end = document.getElementById('bachelors_end')
	console.log(bachelors_end.value)
	education_details['bachelors_end']=bachelors_end.value

	const bachelors_clg_name = document.getElementById('bachelors_clg_name')
	console.log(bachelors_clg_name.value)
	education_details['bachelors_clg_name']=bachelors_clg_name.value

	const bachelors_course = document.getElementById('bachelors_course')
	console.log(bachelors_course.value)
	education_details['bachelors_course']=bachelors_course.value

	const bachelors_marks = document.getElementById('bachelors_marks')
	console.log(bachelors_marks.value)
	education_details['bachelors_marks']=bachelors_marks.value

// intermediate(12th) details
	const intermediate_start = document.getElementById('intermediate_start')
	console.log(intermediate_start.value)
	education_details['intermediate_start']=intermediate_start.value

	const intermediate_end = document.getElementById('intermediate_end')
	console.log(intermediate_end.value)
	education_details['intermediate_end']=intermediate_end.value

	const intermediate_clg_name = document.getElementById('intermediate_clg_name')
	console.log(intermediate_clg_name.value)
	education_details['intermediate_clg_name']=intermediate_clg_name.value

	const intermediate_course = document.getElementById('intermediate_course')
	console.log(intermediate_course.value)
	education_details['intermediate_course']=intermediate_course.value

	const intermediate_marks = document.getElementById('intermediate_marks')
	console.log(intermediate_marks.value)
	education_details['intermediate_marks']=intermediate_marks.value


// School details
	// const school_start = document.getElementById('school_start')
	// console.log(school_start.value)
	// education_details['school_start']=school_start.value

	const school_end = document.getElementById('school_end')
	console.log(school_end.value)
	education_details['school_end']=school_end.value

	const school_name = document.getElementById('school_name')
	console.log(school_name.value)
	education_details['school_name']=school_name.value

	const school_marks = document.getElementById('school_marks')
	console.log(school_marks.value)
	education_details['school_marks']=school_marks.value

	console.log(education_details)

//work experience details
	let work_details={}
	//most recent work details 
	const most_recent_work_start = document.getElementById('most_recent_work_start')
	console.log(most_recent_work_start.value)
	work_details['work_1_start']=most_recent_work_start.value

	const most_recent_work_end = document.getElementById('most_recent_work_end')
	console.log(most_recent_work_end.value)
	work_details['work_1_end']=most_recent_work_end.value

	const most_recent_work_company = document.getElementById('most_recent_work_company')
	console.log(most_recent_work_company.value)
	work_details['work_1_company']=most_recent_work_company.value

	
	const most_recent_work_title = document.getElementById('job_1_title')
	console.log(most_recent_work_title.value)
	work_details['job_1_title']=most_recent_work_title.value

	const most_recent_work_details = document.getElementById('most_recent_work_details')
	console.log(most_recent_work_details.value)
	work_details['work_1_details']=most_recent_work_details.value

	// past work
	const past_work_start = document.getElementById('past_work_start')
	console.log(past_work_start.value)
	work_details['work_2_start']=past_work_start.value

	const past_work_end = document.getElementById('past_work_end')
	console.log(past_work_end.value)
	work_details['work_2_end']=past_work_end.value

	const past_work_company = document.getElementById('past_work_company')
	console.log(past_work_company.value)
	work_details['work_2_company']=past_work_company.value

	const past_work_company_title = document.getElementById('job_2_title')
	console.log(past_work_company_title.value)
	work_details['job_2_title']=past_work_company_title.value

	const past_work_details = document.getElementById('past_work_details')
	console.log(past_work_details.value)
	work_details['work_2_details']=past_work_details.value
	console.log(work_details)

// project details
	let project_details={}
	// project 1
	const project_1_name = document.getElementById('project_1_name')
	console.log(project_1_name.value)
	project_details['project_1_name']=project_1_name.value

	const project_1_details= document.getElementById('project_1_details')
	console.log(project_1_details.value)
	project_details['project_1_details']=project_1_details.value

	// const project_1_link = document.getElementById('project_1_link')
	// console.log(project_1_link.value)
	// project_details['project_1_link']=project_1_link.value

	const project_1_tech_stack = document.getElementById('project_1_tech_stack')
	console.log(project_1_tech_stack.value)
	project_details['project_1_tech_stack']=project_1_tech_stack.value

	// project 2
	const project_2_name = document.getElementById('project_2_name')
	console.log(project_2_name.value)
	project_details['project_2_name']=project_2_name.value

	const project_2_details= document.getElementById('project_2_details')
	console.log(project_2_details.value)
	project_details['project_2_details']=project_2_details.value

	// const project_2_link = document.getElementById('project_2_link')
	// console.log(project_2_link.value)
	// project_details['project_2_link']=project_2_link.value

	const project_2_tech_stack = document.getElementById('project_2_tech_stack')
	console.log(project_2_tech_stack.value)
	project_details['project_2_tech_stack']=project_2_tech_stack.value

	console.log(project_details)

// technical skills
	let tech_skills_array=[]
	const tech_skills = document.getElementById('tech_skills').value
	console.log(tech_skills)
	// returns an array with technical skills 
	tech_skills_array=tech_skills.split(',')
	console.log(tech_skills_array)

// languages
	let languages_array={}
	const languages = document.getElementById('languages').value
	languages_array=languages.split(',')
	console.log(languages_array)

// social media links
	// let social_media_links_array={}
	// const linkedin_link = document.getElementById('linkedin_link').value
	// social_media_links_array['linkedin_link']=linkedin_link
	// const github_link = document.getElementById('github_link').value
	// social_media_links_array['github_link']=github_link
	// const twitter_link = document.getElementById('twitter_link').value
	// social_media_links_array['twitter_link']=twitter_link
	// console.log(social_media_links_array)

// adding resume details to the localstorage
	 //JSON.stringify the objects and adding to localStorage
	 bio_data_stringify = JSON.stringify(bio_data)
	 localStorage.setItem('bio_details',bio_data_stringify) 
	 // console.log('localStorage[bio_data]:',localStorage.getItem('bio_details'))

	 education_details_stringify = JSON.stringify(education_details)
	 localStorage.setItem('education_details',education_details_stringify)

	 // education_details_stringify = JSON.stringify(education_details)
	 // localStorage.setItem('education_details',education_details_stringify)

	 work_details_stringify = JSON.stringify(work_details)
	 localStorage.setItem('work_details',work_details_stringify)

	 project_details_stringify = JSON.stringify(project_details)
	 localStorage.setItem('project_details',project_details_stringify)

	 tech_skills_array_stringify = JSON.stringify(tech_skills_array)
	 localStorage.setItem('tech_skills_array',tech_skills_array_stringify)

	 languages_array_stringify = JSON.stringify(languages_array)
	 localStorage.setItem('languages_array',languages_array_stringify)

	 // social_media_links_array_stringify = JSON.stringify(social_media_links_array)
	 // localStorage.setItem('social_media_links_array',social_media_links_array_stringify)


	 // below line will open portfolio in new tab
	window.open('../html/portfolio_2_index.html')














}
