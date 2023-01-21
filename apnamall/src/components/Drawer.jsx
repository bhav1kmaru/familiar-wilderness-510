import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Stack,
  Radio,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

function Draw() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        {/* <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack> */}
      </RadioGroup>
      <Button w={'100%'} variant="outline" colorScheme="blue" onClick={onOpen}>
        Shop By Category
      </Button>
      <Drawer mt="100" placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Jewellwry</p>
            <p>Fashion</p>
            <p>Furniture</p>
            <p>Levis</p>
            <p>UCB</p>
            <p>Intertainment</p>
            <p>Jewellwry</p>
            <p>Fashion</p>
            <p>BIBA</p>
            <p>Jewellwry</p>
            <p>Clarks</p>
            <p>Arrow</p>
            <p>Woodland</p>
            <p>Fashion</p>
            <p>Crocs</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Draw
