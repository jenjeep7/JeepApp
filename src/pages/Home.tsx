import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { useCamera, availableFeatures } from '@ionic/react-hooks/camera';
import { CameraResultType } from '@capacitor/core';

const Home: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     <h3>Jeep Home Page</h3>
      </IonContent>
    </IonPage>
  
  );
};

export default Home;
