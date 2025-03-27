import { ProfileType } from '../store/AuthSlice';

export function calculateNormDailyCalories(profile?: ProfileType): {
  normCalories: number;
  userNormOfProtein: number;
  userNormOfFats: number;
  userNormOfCarbs: number;
} | null {
  if (
    !profile ||
    !profile.weight ||
    !profile.height ||
    !profile.age ||
    !profile.goal ||
    !profile.gender ||
    !profile.activity
  ) {
    return null;
  }

  const { weight, height, age, goal, gender, activity } = profile;
  let metabolicRate = 0;

  if (gender === 'female') {
    metabolicRate = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  } else if (gender === 'male') {
    metabolicRate = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age;
  }

  let activityCoefficient = 1.2;
  if (activity === 'Average') {
    activityCoefficient = 1.375;
  } else if (activity === 'High') {
    activityCoefficient = 1.55;
  }

  let goalCoefficient = 1;
  if (goal === 'lose') {
    goalCoefficient = 0.8;
  } else if (goal === 'gain') {
    goalCoefficient = 1.2;
  }

  const normCalories = Math.round(
    metabolicRate * activityCoefficient * goalCoefficient
  );

  const caloriesForProtein = normCalories * 0.3;
  const caloriesForFats = normCalories * 0.3;
  const caloriesForCarbs = normCalories * 0.4;

  const userNormOfProtein = Math.round(caloriesForProtein / 4);
  const userNormOfFats = Math.round(caloriesForFats / 9);
  const userNormOfCarbs = Math.round(caloriesForCarbs / 4);

  return {
    normCalories,
    userNormOfProtein,
    userNormOfFats,
    userNormOfCarbs,
  };
}
