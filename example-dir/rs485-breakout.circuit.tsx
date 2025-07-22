import { sel } from "@tscircuit/core"

const RJ45_8PTH = (
  <footprint name="RJ45-8">
    <platedhole
      portHints={["pin1"]}
      pcbX="-4.445mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      shape="circular_hole_with_rect_pad"
      rectPadWidth="1.8796mm"
      rectPadHeight="1.8796mm"
    />
    <platedhole
      portHints={["pin2"]}
      pcbX="-3.175mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin3"]}
      pcbX="-1.905mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin4"]}
      pcbX="-0.635mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin5"]}
      pcbX="0.635mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin6"]}
      pcbX="1.905mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin7"]}
      pcbX="3.175mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin8"]}
      pcbX="4.445mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <hole pcbX="-5.715mm" pcbY="0mm" diameter="3.2mm" />
    <hole pcbX="5.715mm" pcbY="0mm" diameter="3.2mm" />
    <silkscreenpath
      route={[
        { x: -7.62, y: 10 },
        { x: 7.62, y: 10 },
        { x: 7.62, y: -3 },
        { x: -7.62, y: -3 },
        { x: -7.62, y: 10 },
      ]}
      strokeWidth="0.2032mm"
    />
  </footprint>
)

const SCREWTERMINAL_3_5MM_3 = (
  <footprint name="SCREWTERMINAL-3.5MM-3">
    <platedhole
      portHints={["pin1"]}
      pcbX="0mm"
      pcbY="0mm"
      holeDiameter="1.2mm"
      shape="circular_hole_with_rect_pad"
      rectPadWidth="2.032mm"
      rectPadHeight="2.032mm"
    />
    <platedhole
      portHints={["pin2"]}
      pcbX="3.5mm"
      pcbY="0mm"
      holeDiameter="1.2mm"
      outerDiameter="2.032mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin3"]}
      pcbX="7mm"
      pcbY="0mm"
      holeDiameter="1.2mm"
      outerDiameter="2.032mm"
      shape="circle"
    />
    {/* Silkscreen outline */}
    <silkscreenpath
      route={[
        { x: -2.3, y: 3.4 },
        { x: 9.3, y: 3.4 },
        { x: 9.3, y: -2.8 },
        { x: 9.3, y: -3.6 },
        { x: -2.3, y: -3.6 },
        { x: -2.3, y: -2.8 },
        { x: -2.3, y: 3.4 },
      ]}
      strokeWidth="0.2032mm"
    />
    <silkscreenpath
      route={[
        { x: 9.3, y: -2.8 },
        { x: -2.3, y: -2.8 },
      ]}
      strokeWidth="0.2032mm"
    />
  </footprint>
)


import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["RO"],
  pin2: ["RE"],
  pin3: ["DE"],
  pin4: ["DI"],
  pin5: ["GND"],
  pin6: ["A"],
  pin7: ["B"],
  pin8: ["VCC"],
} as const

 const RS485SOIC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C19738"],
      }}
      manufacturerPartNumber="RS485SOIC"
      footprint={
        <footprint name="SO08">
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.362, y: -1.803 },
              { x: -2.362, y: 1.803 },
            ]}
            strokeWidth="0.1524mm"
          />
          <silkscreenpath
            route={[
              { x: 2.362, y: -1.803 },
              { x: 2.362, y: 1.803 },
            ]}
            strokeWidth="0.1524mm"
          />
          <silkscreenpath
            route={[
              { x: -1.8034, y: -0.9906 },
              { x: -1.8034, y: -0.9906 },
            ]}
            strokeWidth="0.2032mm"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dc694c23844346e9981bdbac7bb76421&pn=C19738",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}


export const RS485BreakoutBoard = () => (
<board width="22.86mm" height="27.94mm">
    <pinheader
      name="JP9"
      pinCount={5}
      footprint="pinrow5_p2.54_id1.016_od1.8769_nosquareplating_nopinlabels"
      showSilkscreenPinLabels={false}
      gender="female"
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net().RX_I,
        pin3: sel.net().TX_O,
        pin4: sel.R3.pin2,
        pin5: sel.net.GND,
      }}
      pcbX={-8.89}
      pcbRotation={270}
    />
    <silkscreentext text="RTS" fontSize={1.5} pcbX={-8} pcbY={-7.8} />
    <silkscreentext text="RS485 Breakout" fontSize={1.5} pcbX={0} pcbY={9} />

    <resistor
      resistance="330"
      footprint="0603"
      name="R3"
      schX={2}
      schY={-1}
      pcbX={-3.81}
      pcbY={-6.35}
      schRotation={90}
      connections={{
        pin1: sel.LED3.anode,
        pin2: sel.JP9.pin4,
      }}
    />
    <led
      name="LED3"
      footprint="0603_textbottom"
      pcbX={-3.81}
      pcbRotation={0}
      pcbY={-7.874}
      color="Green"
      schX={1.997}
      schY={-2.5}
      schRotation={-90}
      connections={{
        pin1: sel.R3.pin1
      }}
    />
    <netlabel
      net="GND"
      schX={2}
      schY={-3.4}
      connection="LED3.pin2"
      anchorSide="top"
    />
    <netlabel
      net="GND"
      schX={1}
      schY={-0.5}
      connection="JP9.pin5"
      anchorSide="top"
    />
    <netlabel
      net="VCC"
      schX={1}
      schY={0.5}
      connection="JP9.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="RX_I"
      schX={1}
      schY={0.2}
      connection="JP9.pin2"
      anchorSide="left"
    />
    <netlabel
      net="TX_O"
      schX={1}
      schY={0}
      connection="JP9.pin3"
      anchorSide="left"
    />

    <RS485SOIC
      name="U2"
      connections={{
        RO: sel.net().TX_O,
        DE: sel.U2.pin2,
        DI: sel.net().RX_I,
        GND: sel.net.GND,
        A: sel.net().A,
        B: sel.net().B,
        VCC: sel.net.VCC,
      }}
      schX={7}
      pcbX={-3.81}
      pcbY={0}
    />
    <netlabel
      net="TX_O"
      schX={5.5}
      schY={0.3}
      connection="U2.pin1"
      anchorSide="right"
    />
    <netlabel
      net="RTS"
      schX={5.5}
      schY={0.1}
      connection="U2.pin2"
      anchorSide="right"
    />
    <netlabel
      net="RX_I"
      schX={5.5}
      schY={-0.3}
      connection="U2.pin4"
      anchorSide="right"
    />
    <netlabel
      net="GND"
      schX={8.5}
      schY={-0.5}
      connection="U2.pin5"
      anchorSide="top"
    />
    <netlabel
      net="A"
      schX={8.5}
      schY={-0.1}
      connection="U2.pin6"
      anchorSide="left"
    />
    <netlabel
      net="B"
      schX={8.5}
      schY={0.1}
      connection="U2.pin7"
      anchorSide="left"
    />
    <netlabel
      net="VCC"
      schX={8.5}
      schY={0.5}
      connection="U2.pin8"
      anchorSide="bottom"
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      footprint="0603"
      schX={10}
      pcbX={-6.477}
      pcbY={5.461}
      pcbRotation={90}
      schRotation="-90deg"
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net.GND,
      }}
    />
    <netlabel
      net="VCC"
      schX={10}
      schY={1}
      connection="C3.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={10}
      schY={-1}
      connection="C3.pin2"
      anchorSide="top"
    />

    <pinheader
      name="JP1"
      pinCount={4}
      footprint="pinrow4_p2.54_id1.016_od1.8769_doublesidedpinlabel"
      gender="female"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      pcbPinLabels={{ pin1: "5", pin2: "3", pin3: "2", pin4: "1" }}
      pitch="1mm"
      pcbY={-12.7}
      schX={13}
      schY={4}
      connections={{
        pin1: sel.net().FIVE,
        pin2: sel.net().THREE,
        pin3: sel.net().TWO,
        pin4: sel.net().ONE,
      }}
    />
    <netlabel
      net="FIVE"
      schX={14}
      schY={3.7}
      connection="JP1.pin1"
      anchorSide="left"
    />
    <netlabel
      net="THREE"
      schX={14}
      schY={3.9}
      connection="JP1.pin2"
      anchorSide="left"
    />
    <netlabel
      net="TWO"
      schX={14}
      schY={4.1}
      connection="JP1.pin3"
      anchorSide="left"
    />
    <netlabel
      net="ONE"
      schX={14}
      schY={4.3}
      connection="JP1.pin4"
      anchorSide="left"
    />

    <pinheader
      name="JP2"
      pinCount={3}
      footprint={SCREWTERMINAL_3_5MM_3}
      gender="female"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      pcbRotation={90}
      pitch="1mm"
      pcbX={6.35}
      pcbY={-3.429}
      schX={13}
      schY={2}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.R4.pin1,
        pin3: sel.R4.pin2,
      }}
    />
    <netlabel
      net="GND"
      schX={14}
      schY={1.5}
      connection="JP2.pin1"
      anchorSide="top"
    />
    <resistor
      resistance="220"
      footprint="0603"
      name="R4"
      schX={15}
      schY={2}
      schRotation={90}
      pcbX={-4.064}
      pcbY={5.08}
      pcbRotation={180}
      connections={{
        pin1: sel.net().B,
        pin2: sel.net().A,
      }}
    />
    <netlabel
      net="A"
      schX={15.5}
      schY={1}
      connection="R4.pin1"
      anchorSide="left"
    />
    <netlabel
      net="B"
      schX={15.5}
      schY={3}
      connection="R4.pin2"
      anchorSide="left"
    />
    <pinheader
      name="JP3"
      pinCount={3}
      footprint="pinrow3_p2.54_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal"
      gender="female"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      pcbRotation={90}
      pitch="1mm"
      pcbX={10.16}
      schX={13}
      schY={-0.5}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().A,
        pin3: sel.net().B,
      }}
      pcbPinLabels={{ pin1: "G", pin2: "A", pin3: "B" }}
    />
    <netlabel
      net="GND"
      schX={14}
      schY={-1}
      connection="JP3.pin1"
      anchorSide="top"
    />
    <netlabel
      net="A"
      schX={14}
      schY={-0.5}
      connection="JP3.pin2"
      anchorSide="left"
    />
    <netlabel
      net="B"
      schX={14}
      schY={-0.3}
      connection="JP3.pin3"
      anchorSide="left"
    />

    <pinheader
      name="JP4"
      pinCount={8}
      footprint={RJ45_8PTH}
      gender="female"
      pitch="2.54mm"
      pinLabels={["1", "2", "3", "4", "5", "6", "7", "8"]}
      schX={13}
      schY={-3}
      pcbX={8.89}
      pcbRotation={90}
      connections={{
        pin1: sel.net().ONE,
        pin2: sel.net().TWO,
        pin3: sel.net().THREE,
        pin4: sel.JP4.pin5,
        pin5: sel.net.GND,
        pin6: sel.net().FIVE,
        pin7: sel.net().B,
        pin8: sel.net().A,
      }}
      schWidth={0.9}
    />
    <netlabel
      net="GND"
      schX={16}
      schY={-3.5}
      connection="JP4.pin5"
      anchorSide="top"
    />
    <netlabel
      net="ONE"
      schX={15}
      schY={-2.3}
      connection="JP4.pin1"
      anchorSide="left"
    />
    <netlabel
      net="TWO"
      schX={15}
      schY={-2.5}
      connection="JP4.pin2"
      anchorSide="left"
    />
    <netlabel
      net="THREE"
      schX={15}
      schY={-2.7}
      connection="JP4.pin3"
      anchorSide="left"
    />
    <netlabel
      net="FIVE"
      schX={15}
      schY={-3.3}
      connection="JP4.pin6"
      anchorSide="left"
    />
    <netlabel
      net="B"
      schX={15}
      schY={-3.5}
      connection="JP4.pin7"
      anchorSide="left"
    />
    <netlabel
      net="A"
      schX={15}
      schY={-3.7}
      connection="JP4.pin8"
      anchorSide="left"
    />
    <schematictext
      text="RJ45-8PTH"
      color="gray"
      fontSize={0.2}
      schX={13}
      schY={-4.1}
    />
    <hole diameter="3.32mm" pcbX={-8.89} pcbY={-11.43} />
    <hole diameter="3.32mm" pcbX={8.89} pcbY={11.43} />
    <hole diameter="3.32mm" pcbX={8.89} pcbY={-11.43} />
    <hole diameter="3.32mm" pcbX={-8.89} pcbY={11.43} />
  </board>
)
