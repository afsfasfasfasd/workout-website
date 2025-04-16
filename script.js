const workouts = [
    {
      label: "Legs 1 (Quad Focused)",
      timestamp: "0:52",
      exercises: [
        "Squats - 3x4 (80% 1RM)",
        "RDL - 3x10",
        "Single Leg Press - 3x15",
        "Eccentric-Accentuated Leg Extension - 3x10-12",
        "Seated Leg Curl - 3x10-12",
        "Standing Calf Raise - 3x10-12",
        "Decline Crunches - 2x10-12",
        "Long-Lever Planks - 2x30s",
      ],
    },
    {
      label: "Push 1 (Chest Focused)",
      timestamp: "4:54",
      exercises: [
        "Bench Press - 3x8 (72.5% 1RM)",
        "Machine Shoulder Press - 3x12",
        "Dip (or Deficit Pushups) - 3x12-15",
        "Eccentric Skullcrusher - 3x8-10",
        "Egyptian Lateral Raise - 3x12 + MYO",
        "Cable Tricep Kickback - 3x20-30",
      ],
    },
    {
      label: "Pull 1 (Lat Focused)",
      timestamp: "7:24",
      exercises: [
        "Weighted Pull-Up - 3x6",
        "Seated Cable Row - 3x10-12",
        "Kneeling Cable Pullover - 3x15-20",
        "Hammer Cheat Curl - 3x8-10",
        "Incline Dumbbell Curl - 2x12-15",
      ],
    },
    {
      label: "Legs 2 (Posterior Chain)",
      timestamp: "9:35",
      exercises: [
        "Deadlift - 3x3 (80-85% 1RM)",
        "Hack Squat (or Goblet Squat) - 3x10-12",
        "Single-Leg Hip Thrust - 2x15",
        "Nordic Ham Curl / Prisoner Back Extension",
        "Single-Leg Calf Raise - 3x8-10",
        "Weighted L-Sit Hold - 3 sets to failure",
      ],
    },
    {
      label: "Push 2 (Delt Focused)",
      timestamp: "12:15",
      exercises: [
        "Overhead Press - 4x4 (80% 1RM)",
        "Close-Grip Bench Press - 3x10",
        "Cable Crossover - 3x10-12 + Drop Set",
        "Overhead Tricep Extension - 3x10-12",
        "Lateral Raise 21's - 3x7/7/7",
        "Neck Flexion/Extension - 3x10-12",
      ],
    },
    {
      label: "Pull 2 (Mid-Back & Rear Delt)",
      timestamp: "15:03",
      exercises: [
        "OMNI-Grip Lat Pulldown - 3x10-12 (Wide, Close, Supinated)",
        "Chest-Supported Row - 3x10-12",
        "Rope Face Pull - 3x15-20",
        "Incline Dumbbell Shrug - 3x15-20 (Optional)",
        "Reverse Pec Deck - 2x15 + 10-15",
        "Pronated/Supinated Curl - 3x10/10",
      ],
    },
  ];
  
  const tabButtons = document.getElementById(\"tab-buttons\");
  const tabContents = document.getElementById(\"tab-contents\");
  
  workouts.forEach((w, index) => {
    // Create tab button
    const btn = document.createElement(\"button\");
    btn.textContent = w.label;
    btn.addEventListener(\"click\", () => {
      document.querySelectorAll(\".tabs button\").forEach(b => b.classList.remove(\"active\"));
      document.querySelectorAll(\".tab\").forEach(tab => tab.classList.remove(\"active\"));
      btn.classList.add(\"active\");
      document.getElementById(`tab-${index}`).classList.add(\"active\");
    });
    if (index === 0) btn.classList.add(\"active\");
    tabButtons.appendChild(btn);
  
    // Create tab content
    const tab = document.createElement(\"div\");
    tab.className = \"tab\" + (index === 0 ? \" active\" : \"\");
    tab.id = `tab-${index}`;
    tab.innerHTML = `
      <h2>${w.label}</h2>
      <p><strong>Starts at:</strong> ${w.timestamp}</p>
      <ul>${w.exercises.map(ex => `<li>${ex}</li>`).join(\"\")}</ul>
    `;
    tabContents.appendChild(tab);
  });
  