import { styled } from "@/styles";

export const SuccessContainer = styled('main', {
  margin: "0 auto",
  height: 656,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",   
  
  h1: {
    fontSize: "$2xl",
    color: "$gray100"
  },

  p: {
    maxWidth: 560,
    marginTop: "2rem",

    fontSize: "$xl",
    lineHeight: 1.6,
    textAlign: "center",

    color: "$gray300"
  },

  a: {
    marginTop: "5rem",

    display: "block",

    fontSize: "$lg",
    fontWeight: "bold",
    textDecoration: "none",
    
    color: "$green500",

    "&:hover": {
      color: "$green300"
    }
  }
})

export const ImageContainer = styled('div', {
  width: "100%",
  maxWidth: 130,
  height: 145,
  marginTop: "4rem",
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
    
  borderRadius: 8,
  background: "linear-gradient(180deg, #1ea483 0%, #7456d4 100%)",

  img: {
    objectFit: "cover"
  }
})