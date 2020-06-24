@echo off
echo .
echo --------------------------------------------------------------------- 

echo ------ Welcome To The Creatorjs Setup ----
echo (-- This Uses The cecho Command And So You Have cecho.exe in here --)  
cecho {0B}-- Getting Ready For Setup....{#}
echo .
echo Launching Setup...
echo please type in correct information as this info is critical and can even destroy some creatorjs functions.
set /p projname="Project Name: " 
cecho {0A}+ Set Poject Name To "%projname%"{#}
echo .
echo Project Initialization Done...
echo Starting Creatorjs Requirements Initialization...
set /p willusealgos="Will Your Prject Require Algorithms (y/n): "
if %willusealgos%==y (
    cecho {0A}+ Set ProjectUsesAlgorithms to "True"{#}
    echo .
) else (
    cecho {0C}- Set ProjectUsesAlgorithms to "False"{#}
)
echo Project Setup Done!
echo --------------------------------------------------------------------- 
echo .