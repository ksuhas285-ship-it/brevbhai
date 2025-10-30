export interface Meal {
  meal: string;
  foodItems: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface RecipeData {
  meals: Meal[];
  summary: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    goal: string;
  };
}

export interface Exercise {
  name: string;
  sets: string;
}

export interface WorkoutDay {
  day: string;
  focus: string;
  exercises: Exercise[];
}

export const getRecipes = (dietType: string): RecipeData => {
  const recipes: Record<string, RecipeData> = {
    eggetarian: {
      meals: [
        {
          meal: 'Breakfast',
          foodItems: '50g oats (in water) + 4 whole boiled eggs',
          calories: 502,
          protein: 32,
          carbs: 34,
          fat: 25,
        },
        {
          meal: 'Lunch',
          foodItems: '120g paneer + 2 chapatis + 1 cup dal + 1 cup sabzi',
          calories: 840,
          protein: 41,
          carbs: 74,
          fat: 41,
        },
        {
          meal: 'Pre-Workout',
          foodItems: '2 medium bananas',
          calories: 210,
          protein: 2,
          carbs: 54,
          fat: 0.6,
        },
        {
          meal: 'Dinner',
          foodItems: '5 whole eggs + 2 chapatis + 1 cup sabzi (no potato/rice)',
          calories: 710,
          protein: 41,
          carbs: 48,
          fat: 37,
        },
      ],
      summary: {
        calories: '~2260 kcal',
        protein: '~116g',
        carbs: '~210g',
        fat: '~103g',
        goal: 'Muscle maintenance / lean gain',
      },
    },
    vegetarian: {
      meals: [
        {
          meal: 'Breakfast',
          foodItems: '50g oats (in water) + 120g cooked soya',
          calories: 360,
          protein: 23,
          carbs: 42,
          fat: 12,
        },
        {
          meal: 'Lunch',
          foodItems: '120g paneer + 2 chapati + dal + sabzi',
          calories: 840,
          protein: 41,
          carbs: 74,
          fat: 41,
        },
        {
          meal: 'Pre-Workout',
          foodItems: '2 medium bananas',
          calories: 210,
          protein: 2,
          carbs: 54,
          fat: 0.6,
        },
        {
          meal: 'Dinner',
          foodItems: '120g cooked soya + 2 chapati + sabzi (no rice/aloo)',
          calories: 490,
          protein: 26,
          carbs: 56,
          fat: 19,
        },
      ],
      summary: {
        calories: '~1900 kcal',
        protein: '~92g',
        carbs: '~226g',
        fat: '~72g',
        goal: 'Fat loss / lean muscle maintenance',
      },
    },
    'non-vegetarian': {
      meals: [
        {
          meal: 'Breakfast',
          foodItems: '50g oats (in water) + 4 boiled eggs',
          calories: 502,
          protein: 32,
          carbs: 34,
          fat: 25,
        },
        {
          meal: 'Lunch (Option A)',
          foodItems: 'Ghar ka khana + 120g paneer',
          calories: 840,
          protein: 41,
          carbs: 74,
          fat: 41,
        },
        {
          meal: 'Lunch (Option B)',
          foodItems: 'Ghar ka khana + 120g chicken',
          calories: 700,
          protein: 52,
          carbs: 68,
          fat: 28,
        },
        {
          meal: 'Pre-Workout',
          foodItems: '2 bananas',
          calories: 210,
          protein: 2,
          carbs: 54,
          fat: 0.6,
        },
        {
          meal: 'Dinner (Option A)',
          foodItems: 'Ghar ka khana + 5 eggs (no rice/aloo)',
          calories: 710,
          protein: 41,
          carbs: 48,
          fat: 37,
        },
        {
          meal: 'Dinner (Option B)',
          foodItems: 'Ghar ka khana + 120g chicken',
          calories: 620,
          protein: 50,
          carbs: 46,
          fat: 25,
        },
      ],
      summary: {
        calories: '2000-2260 kcal',
        protein: '115-135g',
        carbs: '~200-210g',
        fat: '~80-100g',
        goal: 'Lean muscle gain or maintenance',
      },
    },
  };

  return recipes[dietType] || recipes.vegetarian;
};

export const getWorkouts = (workoutType: string): WorkoutDay[] => {
  const workouts: Record<string, WorkoutDay[]> = {
    'gym workout': [
      {
        day: 'Monday/Thursday',
        focus: 'push',
        exercises: [
          { name: 'DB Incline Bench', sets: '5x10' },
          { name: 'Machine Press', sets: '5x15' },
          { name: 'Pec Dec', sets: '5x15' },
          { name: 'Rope Pushdown', sets: '5x20' },
        ],
      },
      {
        day: 'Tuesday/Friday',
        focus: 'legs',
        exercises: [
          { name: 'Squats', sets: '4x10' },
          { name: 'Leg Extension', sets: '5x10' },
          { name: 'Leg Curls', sets: '5x10' },
          { name: 'Calf Raises Standing', sets: '6x25' },
        ],
      },
      {
        day: 'Wednesday/Saturday',
        focus: 'back',
        exercises: [
          { name: 'Pulldown', sets: '5x10' },
          { name: 'Rows', sets: '5x15' },
          { name: 'Pullups', sets: '5x7' },
          { name: 'Bicep DB Curl', sets: '5x30' },
        ],
      },
    ],
    'home workout': [
      {
        day: 'Monday/Thursday',
        focus: 'push',
        exercises: [
          { name: 'Pushups - Normal', sets: '5x15' },
          { name: 'Pushups - Close Grip', sets: '5x15' },
          { name: 'Pushups - Incline', sets: '5x15' },
        ],
      },
      {
        day: 'Tuesday/Friday',
        focus: 'legs',
        exercises: [
          { name: 'Squats - Normal', sets: '5x15' },
          { name: 'Squats - Jumping', sets: '5x15' },
          { name: 'Bulgarian Squats', sets: '5x15' },
        ],
      },
      {
        day: 'Wednesday/Saturday',
        focus: 'back',
        exercises: [
          { name: 'Pullups - Normal', sets: '5x8' },
          { name: 'Chinups', sets: '5x8' },
          { name: 'Parallel Pullups', sets: '5x8' },
        ],
      },
    ],
  };

  return workouts[workoutType] || workouts['home workout'];
};
