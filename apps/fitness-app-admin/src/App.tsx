import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { WorkoutList } from "./workout/WorkoutList";
import { WorkoutCreate } from "./workout/WorkoutCreate";
import { WorkoutEdit } from "./workout/WorkoutEdit";
import { WorkoutShow } from "./workout/WorkoutShow";
import { NutritionList } from "./nutrition/NutritionList";
import { NutritionCreate } from "./nutrition/NutritionCreate";
import { NutritionEdit } from "./nutrition/NutritionEdit";
import { NutritionShow } from "./nutrition/NutritionShow";
import { ExerciseList } from "./exercise/ExerciseList";
import { ExerciseCreate } from "./exercise/ExerciseCreate";
import { ExerciseEdit } from "./exercise/ExerciseEdit";
import { ExerciseShow } from "./exercise/ExerciseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FitnessApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Workout"
          list={WorkoutList}
          edit={WorkoutEdit}
          create={WorkoutCreate}
          show={WorkoutShow}
        />
        <Resource
          name="Nutrition"
          list={NutritionList}
          edit={NutritionEdit}
          create={NutritionCreate}
          show={NutritionShow}
        />
        <Resource
          name="Exercise"
          list={ExerciseList}
          edit={ExerciseEdit}
          create={ExerciseCreate}
          show={ExerciseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
