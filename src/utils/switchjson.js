import course1 from '../projects/core-engg/Assets/Json/Structural_Engineering.json'

export const switchjson= ( jsonNumber ) => {
   
    switch (jsonNumber) {
      case 1:
        return course1

      default:
        return { error: 'Invalid input or JSON not found' };
    }
}
