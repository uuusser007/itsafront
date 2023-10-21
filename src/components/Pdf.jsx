import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logoItsa from "../images/logo.png";
import logoRobot from "../images/logoRobot.png";
import informatica from "../images/informatica.png";

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    textAlign: "center",
    padding: 20,
    position: "relative",
  },
  image: {
    width: 160,
    height: 100,
    position: "absolute",
    top:10,
    right: -10,
  },
  image2: {
    width: 120,
    height: 100,
    position: "absolute",
    top: 10,
    left: 2,
  },
  image3: {
    width: 300,
    height: 300,
    position: "absolute",
    top: "30%",
    left:"40%",
    transform: "translate(-50%, -50%)",
    opacity: .2,
    zIndex:-30
  },

  title: {
    margin: "20px 0 5px 0",
    fontSize: 25,
    color: "#089443",
    fontWeight: "black",
  },
  suptitulo: {
    fontWeight: "bold",
  },
  certificado: {
    fontSize: 40,
    fontWeight: "bold",
    margin: "30px 0 10px 0",
  },
  confiere: {
    position: "relative",
    top: 30,
    textAlign: "left",
  },
  nombre: {
    fontSize: 25,
    fontWeight: "bold",
    margin: "5px 0 0 0",
    textTransform: "uppercase",
  },
  linea: {
    width: "80%",
    height: "1px",
    backgroundColor: "#ABC38B",
    margin: "20px auto",
  },
  participacion: {
    fontWeight: "bold",
    margin: "20px 0",
    zIndex:30
  },
});
const Pdf = ({name,last}) => {

  return (
    <>
    
        <Document>

          <Page size="letter" orientation="landscape">
            <View style={styles.pageContainer}>
              <Image style={styles.image} src={logoItsa} />
              <Image style={styles.image2} src={logoRobot} />
              <Image style={styles.image3} src={informatica}    />
              <Text style={styles.title}>INSTITUTO TECNOLOGICO SACABA</Text>
              <Text style={styles.suptitulo}>R.M.N- 999/2023</Text>
              <Text>FD0.21 DE AGOSTO 2003 SACABA-COCHABAMBA-BOLIVIA</Text>
              <Text style={styles.suptitulo}>
                CARRERA DE INFORMATICA INDUSTRIAL
              </Text>
              <Text style={styles.confiere}>Confiere al presente</Text>
              <Text style={styles.certificado}>CERTIFICADO</Text>
              <Text style={styles.nombre}>{name} {last}</Text>
              <Text style={styles.linea}></Text>
              <Text style={styles.participacion}>
                POR SU PARTICIPACION EN EL EXAMEN ITSa-2023
              </Text>
              <Text>
                Realizado en los ambientes del instituto Tecnologico sacaba
              </Text>
              <Text> sacaba, 9 de agosto de 2023</Text>
            </View>
          </Page>
        </Document>
     
    </>
  );
};

export default Pdf;
