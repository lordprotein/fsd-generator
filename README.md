# FSD-CODEGEN

## Installing

Using npm

```
npm install --save-dev fsd-codegenerator
```

Using yarn

```
yarn add -D fsd-codegenerator
```


## Start

For macOS, Linux

```
fsdgen
```

For Windows

```
npx fsdgen
```
> We use npx because the library uses a bin file to run the generator from any location within the project, and Windows currently has a different implementation for working with bins. That's why npx can handle bins on Windows


## Workflow

### Base file structure

```
src/
├── entities/
├── features/
├── widgets/
├── pages/
├── shared/
│   ├── ui/
│   ├── lib/
│   └── types/
```

This file structure is necessary for the generator to work correctly.
If any of the folders are missing in your architecture and you generate something related to it,
the generator will automatically create it.

### Add Slice of Layout

1. Start generator (see **Start** part above)

2. Select the layer to which you want to add a new slice

```
? [FSD-codegen] Please choose a generator 
  slice-segment - add new segment (ui/lib/model) instance to selected slice 
❯ entity-slice - add new entity slice instance 
  feature-slice - add new feature slice instance 
  widget-slice - add new Widget slice instance 
  page-slice - add new page slice instance 
  shared-segment - add new shared segment item 
```

3. Follow next steps
4. After completion, files will be created according to your choice 

### Add Segment (ui, lib, model) of slice

1. Start generator (see **Start** part above)
2. Select "add segment":
```
? [FSD-codegen] Please choose a generator 
❯ slice-segment - add new segment (ui/lib/model) instance to selected slice 
  entity-slice - add new entity slice instance 
  feature-slice - add new feature slice instance 
  widget-slice - add new Widget slice instance 
  page-slice - add new page slice instance 
  shared-segment - add new shared segment item 
```

3. Select the **Layer** that contains your **Slice** where you want to add a **Segment**:
```
? [FSD-codegen] Please choose a generator slice-segment - add new segment (ui/lib/model) instance to selected slice
? Select layer where will be added segment: (Use arrow keys)
❯ entity 
  feature 
  widget 
  page 
```

4. Enter the name of your **Slice** located in the chosen **Layer**:
> If you enter the name of a Slice that does not exist within the selected Layer, the system will generate an error and wait for a corrected version

> Additionally, you can also enter a nested Slice within a parent group. For example: entities/card/[info | win | block]

```
? [FSD-codegen] Please choose a generator slice-segment - add new segment (ui/lib/model) instance to selected slice
? Select layer where will be added segment: entity
? Enter entity slice name where will be added segment: card-info
```

5. Choose the type of Segment
```
? [FSD-codegen] Please choose a generator slice-segment - add new segment (ui/lib/model) instance to selected slice
? Select layer where will be added segment: entity
? Enter entity slice name where will be added segment: card-info
? Select segment type: (Use arrow keys)
❯ ui 
  lib 
  model 
```

6. Select the name for the Segment
```
? [FSD-codegen] Please choose a generator slice-segment - add new segment (ui/lib/model) instance to selected slice
? Select layer where will be added segment: entity
? Enter entity slice name where will be added segment: card-info
? Select segment type: ui
? Enter segment name: footer
```

7. Do you want your Segment to be added to the [public API import](https://feature-sliced.design/docs/reference/public-api)?

```
? [FSD-codegen] Please choose a generator slice-segment - add new segment (ui/lib/model) instance to selected slice
? Select layer where will be added segment: entity
? Enter entity slice name where will be added segment: card-info
? Select segment type: ui
? Enter segment name: footer
? Would you set "card-info" import as public (import will be set on Slice level)? 
  no 
❯ yes 
```
8. After completion, files will be created according to your choice



TODO:
* https://github.com/anc95/inquirer-file-tree-selection for select paths
