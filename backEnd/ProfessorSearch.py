import sys
import ratemyprofessor

professorName = sys.argv[1] + " " + sys.argv[2]
index = sys.argv[3] 

school = ratemyprofessor.get_schools_by_name("University of Texas at Dallas")[0]
professor = ratemyprofessor.get_professors_by_school_and_name(school, professorName)[(int) (index)]

recentComment = professor.get_ratings()[0].comment
score = 2 * professor.rating - professor.difficulty
isGood = score > 3

print("Professor: %s (%s)/Rating: %s/Difficulty: %s/Good Overall: %s/Recent Comment: %s" % (professor.name, professor.department, professor.rating, professor.difficulty, isGood, recentComment))
