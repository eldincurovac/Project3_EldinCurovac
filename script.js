
  
//making object so I can add the current date and time at the end of my webpage
const d = new Date();
document.getElementById("date").innerHTML = d;

//arrays for skills (hard and soft skills)

const softSkills = [
"Communication",

"Customer service",

"Problem-solving",

"Time management",

"Leadership", ];
document.getElementById("softSkills").innerHTML = skills;


const hardSkills = [
    "Software (Communication tools, Social Media, Spreadsheet)",

"Word Processing and Desktop Publishing Tools",

"Tools", "Computer Programming (C++, Java)",

"Presentation",

"English language",

"Turkish language" ];
    document.getElementById("hardSkills").innerHTML = skills;

    $(document).ready(function(){
        $("button").click(function(){
          $("div").animate({
            height: 'toggle'
          });
        });
      });

