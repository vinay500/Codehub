// add if conditions
// add project link to template
// add only 2 project details
// add 4 tech skills
// adding image is pending
// making form more dynamic
function json_parse(key){
	return JSON.parse(localStorage.getItem(key))
}
// bio_details
// const bio_details = JSON.parse(localStorage.getItem('bio_details'))
const bio_details = json_parse('bio_details')
if (bio_details){
	// console.log(bio_details['name'])
	document.getElementById('portfolio_2_name').innerText=bio_details['name']
	document.getElementById('job_role').innerText=bio_details['job_role']
	document.getElementById('address').innerText=bio_details['address']
	document.getElementById('phone').innerText=bio_details['phone']
	document.getElementById('email').innerText=bio_details['email']
	document.getElementById('about').innerText=bio_details['about']
	document.getElementById('profile_img').setAttribute('src',bio_details['image'])
}

// social media links
const social_media_links = json_parse('social_media_links_array')
console.log(social_media_links['linkedin_link'])
if (social_media_links){
	document.getElementById('linkedin_link').setAttribute('href',social_media_links['linkedin_link'])
	// console.log()
	document.getElementById('twitter_link').setAttribute('href',social_media_links['twitter_link'])
	// console.log(social_media_links['twitter_link'])
	// let twitter_link = document.getElementById('twitter_link')
	// console.log(twitter_link)
	// not working
	// console.log(twitter_link.getAttribute['href'])
	document.getElementById('github_link').setAttribute('href',social_media_links['github_link'])
}

// education details
// Bachelors
const education_details=json_parse('education_details')
if (education_details){
	// console.log(education_details['bachelors_start'])
	document.getElementById('bachelors_start').innerText=education_details['bachelors_start']
	document.getElementById('bachelors_end').innerText=education_details['bachelors_end']
	document.getElementById('bachelors_course').innerText=education_details['bachelors_course']
	document.getElementById('bachelors_clg').innerText=education_details['bachelors_clg_name']
	document.getElementById('bachelors_marks').innerText=education_details['bachelors_marks']
	// Intermediate
	document.getElementById('intermediate_start').innerText=education_details['intermediate_start']
	document.getElementById('intermediate_end').innerText=education_details['intermediate_end']
	document.getElementById('intermediate_course').innerText=education_details['intermediate_course']
	document.getElementById('intermediate_clg').innerText=education_details['intermediate_clg_name']
	document.getElementById('intermediate_marks').innerText=education_details['intermediate_marks']
	// School
	document.getElementById('school_end').innerText=education_details['school_end']
	document.getElementById('school').innerText=education_details['school_name']
	document.getElementById('school_marks').innerText=education_details['school_marks']
	console.log(work_1_position.innerText='sde')
	console.log(work_1_company.innerText='goggle')
}
// work details
// work 1
const work_details = json_parse('work_details')
if(work_details){
	document.getElementById('work_1_start').innerText=work_details['work_1_start'].slice(0,4)
	document.getElementById('work_1_end').innerText=work_details['work_1_end'].slice(0,4)
	document.getElementById('work_1_company').innerText=work_details['work_1_company']
	document.getElementById('work_1_position').innerText=work_details['job_1_title']
	document.getElementById('work_1_position_details').innerText=work_details['work_1_details']
	// work 2
	document.getElementById('work_2_start').innerText=work_details['work_2_start'].slice(0,4)
	document.getElementById('work_2_end').innerText=work_details['work_2_end'].slice(0,4)
	document.getElementById('work_2_company').innerText=work_details['work_2_company']
	document.getElementById('work_2_position').innerText=work_details['job_2_title']
	document.getElementById('work_2_position_details').innerText=work_details['work_2_details']
}


// project details
// {
// project_1_details: "this website will show the real time data of nifty 50 stocks"
// project_1_link: "https://manuarora.in/projects"
// project_1_name: 'real time stock tracker'
// project_1_tech_stack: "django,django channels,web sockets"
// project_2_details: "this project will get you the jobs you search from twitter, linkedin"
// project_2_link: "https://manuarora.in/projects"
// project_2_name: "jobs api"
// project_2_tech_stack: "django, react js"
// }
const project_details = json_parse('project_details')
// const project_keys=['project_1_name','project_1_details','project_1_link','project_1_tech_stack']
// for(let i=0;i<2;i++){

// 	for key in project_keys:
// 	    if key=='project_1_tech_stack':
// 	    	tech_skills=project_details[key]
// 	    	for(let i=0;i<tech_skills.length;i++){
// 	    		document.getElementById('project_1_tech_skill_'+num.toString(i)).innerText=tech_skills[i]
// 	    	}
// 		document.getElementById(key).innerText=project_details[]
// 	}
// project 1 details
if (project_details){
	document.getElementById('project_1_name').innerText=project_details['project_1_name']
	document.getElementById('project_1_details').innerText=project_details['project_1_details']
	document.getElementById('project_1_tech_skill_1').innerText=project_details['project_1_tech_stack'].split(',')[0]
	console.log(project_details['project_1_tech_stack'])
	document.getElementById('project_1_tech_skill_2').innerText=project_details['project_1_tech_stack'].split(',')[1]
	document.getElementById('project_1_tech_skill_3').innerText=project_details['project_1_tech_stack'].split(',')[2]
	// project 2 details
	document.getElementById('project_2_name').innerText=project_details['project_2_name']
	document.getElementById('project_2_details').innerText=project_details['project_2_details']
	document.getElementById('project_2_tech_skill_1').innerText=project_details['project_2_tech_stack'].split(',')[0]
	document.getElementById('project_2_tech_skill_2').innerText=project_details['project_2_tech_stack'].split(',')[1]
	if (project_details['project_2_tech_stack'].split(',')[2]){
		console.log(project_details['project_2_tech_stack'].split(',')[2])
		document.getElementById('project_2_tech_skill_3').innerText=project_details['project_2_tech_stack'].split(',')[2]
	}else{
		const ele = document.getElementById('project_2_tech_skill_3')
		ele.innerText=""
		ele.style.border=null
	}
}



// technical skills
	const tech_skills = json_parse('tech_skills_array')
	if(tech_skills){
		// for(let skill_ind=0;skill_ind<tech_skills.length;skill_ind++){
		// 	document.getElementById('tech_skill_'+(skill_ind+1).toString()).innerText=tech_skills[skill_ind]
		// }
	let skills_row = document.getElementById('skills_row')
	for (let skill_ind=0;skill_ind<tech_skills.length;skill_ind++){
		var col_div = document.createElement('div')
		col_div.setAttribute('class','col-md-3')
		let tech_skill = document.createElement('h4')
		tech_skill.innerText=tech_skills[skill_ind]
		col_div.appendChild(tech_skill)
		skills_row.appendChild(col_div)
	}
}

// languages
const languages = json_parse('languages_array')
	if (languages){
	// for(let i=0;i<languages.length;i++){
	// 	document.getElementById('language'+(i+1).toString()).innerText=languages[i]
	// }
	let languages_row = document.getElementById('lang_row')
	for (let lang_ind=0;lang_ind<languages.length;lang_ind++){
		var lang_div = document.createElement('div')
		lang_div.setAttribute('class','col-md-3')
		let lang = document.createElement('h4')
		lang.innerText=languages[lang_ind]
		lang_div.appendChild(lang)
		languages_row.appendChild(lang_div)
	}

}


