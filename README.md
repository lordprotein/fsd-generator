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
(yarn | npm | npx) fsdgen
```

For Windows

```
npx fsdgen
```
> We use npx because the library uses a bin file to run the generator from any location within the project, and Windows currently has a different implementation for working with bins. That's why npx can handle bins on Windows


## Workflow

### Add Slice of Layout

1. Run
```
yarn fsdgen
```

2. Select the layer to which you want to add a new slice

```
? Hello! Choose generator 
  add_segment - add new Segment (ui/lib/model) instance to selected Slice 
❯ add_entity - add new Entity slice instance 
  add_feature - add new Feature slice instance 
  add_widget - Add new Widget slice instance 
  add_page - add new Page slice instance 
```

3. Follow next steps
4. After completion, files will be created according to your choice 

### Add Segment (ui, lib, model) of slice

1. Run:
```
yarn fsdgen
```
2. Select "add segment":
```
? Hello! Choose generator 
❯ add_segment - add new Segment (ui/lib/model) instance to selected Slice 
  add_entity - add new Entity slice instance 
  add_feature - add new Feature slice instance 
  add_widget - Add new Widget slice instance 
  add_page - add new Page slice instance 
```

3. Select the **Layer** that contains your **Slice** where you want to add a **Segment**:
```
? Hello! Choose generator add_segment - add new Segment (ui/lib/model) instance to selected Slice
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
? Hello! Choose generator add_segment - add new Segment (ui/lib/model) instance to selected Slice
? Select layer where will be added segment: entity
? Write name of entity slice: card-payment
```

5. Choose the type of Segment
```
? Hello! Choose generator add_segment - add new Segment (ui/lib/model) instance to selected Slice
? Select layer where will be added segment: entity
? Write name of entity slice: card-payment
? Select segment type: (Use arrow keys)
❯ ui 
  lib 
  model 
```

6. Select the name for the Segment
```
? Hello! Choose generator add_segment - add new Segment (ui/lib/model) instance to selected Slice
? Select layer where will be added segment: entity
? Write name of entity slice: card-payment
? Select segment type: ui
? Write name of segment item: title
```

7. Do you want your Segment to be added to the [public API import](https://feature-sliced.design/docs/reference/public-api)?

```
? Hello! Choose generator add_segment - add new Segment (ui/lib/model) instance to selected Slice
? Select layer where will be added segment: entity
? Write name of entity slice: card-payment
? Select segment type: ui
? Write name of segment item: title
? Would you set "card-payment" import as public (import will be set on Slice level)? 
  no 
❯ yes 
```




TODO:
* https://github.com/anc95/inquirer-file-tree-selection for select paths
